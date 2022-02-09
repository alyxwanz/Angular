import { Component, OnInit } from '@angular/core';
import { CourseCard, COURSE_LIST } from '../../ mock';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from 'src/app/services/courses.service';
import { map, take } from 'rxjs/operators';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  isEditable = false;
  courses$ = this.coursesStoreService.courses$.pipe(
    map((courses) =>
      courses.map(
        (course) =>
          ({
            ...course,
            creationDate: new Date(course.creationDate),
          } as CourseCard)
      )
    )
  );

  faCoffee = faCoffee;
  faEdit = faEdit;
  faTrash = faTrash;
  placeholder = 'Search...';
  constructor(private coursesStoreService: CoursesStoreService) {}

  ngOnInit(): void {
    this.coursesStoreService.getAll().pipe(take(1)).subscribe();
  }

  onNotify() {
    console.log('Show course button was clicked');
  }

  onEdit() {
    console.log('Edit button was clicked');
  }

  onDelete() {
    console.log('Delete button was clicked');
  }

  onSearch(searchRequest: string) {
    console.log(searchRequest);
  }
}
