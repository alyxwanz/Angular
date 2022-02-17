import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { Course } from 'src/app/interface/courses-interface';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css'],
})
export class CourseEditComponent implements OnInit {
  courseEditForm!: FormGroup;
  submitted = false;
  course!: Course;
  isAdmin$: Observable<boolean> = this.userStoreService.isAdmin$;
  page!: 'SHOW' | 'CREATE' | 'EDIT';
  id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private coursesStoreService: CoursesStoreService,
    private userStoreService: UserStoreService,
    private authorsStoreService: AuthorsStoreService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getRouterData();
  }

  getRouterData() {
    this.route.data
      .pipe(
        take(1),
        map((data) => {
          this.page = data.page;
          return this.page;
        }),
        filter((page) => page !== 'CREATE'),
        switchMap(() => {
          const id = this.route.snapshot.paramMap.get('id');
          this.id = id || '';
          return this.coursesStoreService.getCourse(id || '');
        })
      )
      .subscribe((res) => {
        this.course = res;
        this.editCourseInit(this.course);
        this.checkIsAdmin();
      });
  }

  initForm() {
    this.courseEditForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      newAuthor: ['', [Validators.required, this.validateAuthor]],
      duration: ['', [Validators.required, Validators.min(0)]],
      authors: new FormArray([]),
    });
  }

  editCourseInit(course: Course) {
    this.courseEditForm.patchValue(course);
  }

  checkIsAdmin() {
    this.isAdmin$.pipe(take(1)).subscribe((res) => {
      if (!res || this.page === 'SHOW') {
        this.courseEditForm.disable();
      }
    });
  }

  createAuthor($event: Event): void {
    $event.preventDefault();
    const author: string = this.f.newAuthor.value;
    this.authorsStoreService.addAuthor(author).pipe(take(1)).subscribe();
    (this.f.authors as FormArray).push(new FormControl(author));
    this.f.newAuthor.reset('');
  }

  deleteAuthor(i: number): void {
    this.authors.removeAt(i);
  }

  get f() {
    return this.courseEditForm.controls;
  }

  get authors(): FormArray {
    return this.f.authors as FormArray;
  }

  private validateAuthor(control: AbstractControl) {
    const authorPattern = /^([a-zA-Z0-9]+)$/;
    if (control.value && control.value.match(authorPattern)) {
      return null;
    } else {
      return {
        invalidAuthorName:
          'Author name should contain only latin letters and numbers',
      };
    }
  }

  onFormSubmit() {
    const { newAuthor, ...formValue } = this.courseEditForm.value;
    if (this.page === 'EDIT') {
      this.coursesStoreService
        .editCourse(formValue, this.id)
        .pipe(take(1))
        .subscribe();
      return;
    }
    if (this.page === 'CREATE') {
      this.coursesStoreService
        .createCourse({ ...formValue, duration: +formValue.duration })
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigate(['/courses']);
        });
      return;
    }
  }
}
