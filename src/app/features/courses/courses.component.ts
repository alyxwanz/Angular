import { Component, OnInit } from '@angular/core';
import { CourseCard, CourseCreate } from '../../interface/courses-interface';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { map, take, tap } from 'rxjs/operators';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  isAdmin$: Observable<boolean> = this.userStoreService.isAdmin$;
  courses$ = this.coursesStoreService.courses$.pipe(
    map((courses) => {
      return courses.map((course) => {
        const dateParts: string[] = course.creationDate.split('/');
        return {
          ...course,
          creationDate: new Date(
            new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0])
          ),
        } as CourseCard;
      });
    })
  );

  authors$ = this.authorsStoreService.authors$.pipe(tap(responce => console.log(responce)));

  faCoffee = faCoffee;
  faEdit = faEdit;
  faTrash = faTrash;
  placeholder = 'Search...';

  constructor(
    private coursesStoreService: CoursesStoreService,
    private router: Router,
    private userStoreService: UserStoreService,
    private authorsStoreService: AuthorsStoreService
  ) {}

  ngOnInit(): void {
    this.coursesStoreService.getAll().pipe(take(1)).subscribe();
    this.authorsStoreService.getAll().pipe(take(1)).subscribe();
    this.authors$.subscribe();
  }

  onDisplay(id: string) {
    this.router.navigate(['/courses', id]);
  }

  onEdit(id: string) {
    this.router.navigate(['/courses/edit', id]);
    console.log('Edit button was clicked');
  }

  onDelete(id: string) {
    this.coursesStoreService.deleteCourse(id).pipe(take(1)).subscribe();
    console.log(`course: ${id} - was deleted`);
  }

  onSearch(searchRequest: string) {
    console.log(searchRequest);
  }
}
