import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Course } from 'src/app/interface/courses-interface';
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

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private coursesStoreService: CoursesStoreService,
    private userStoreService: UserStoreService
  ) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('route:', id);
    id &&
      this.coursesStoreService
        .getCourse(id)
        .pipe(take(1))
        .subscribe((res) => {
          this.course = res;
          this.editCourseInit(this.course);
          this.checkIsAdmin();
        });
  }

  editCourseInit(course: Course) {
    this.courseEditForm = this.formBuilder.group({
      title: [course.title, Validators.required],
      description: [course.description, Validators.required],
      newAuthor: ['', [Validators.required, this.validateAuthor]],
      duration: [course.duration, [Validators.required, Validators.min(0)]],
      authors: new FormArray([]),
    });
  }

  // initAuthors(authors) {

  // }

  checkIsAdmin() {
    this.isAdmin$.pipe(take(1)).subscribe((res) => {
      if(!res) {
        this.courseEditForm.disable();
      }
    })
  }

  createAuthor(): void {
    const author = this.f.newAuthor.value;
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
    console.log();
  }
}
