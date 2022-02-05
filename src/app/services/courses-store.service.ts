import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Course, CourseCreate } from '../interface/courses-interface';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  isLoading$!: Observable<boolean>;
  courses$!: Observable<Course[]>;

  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private courses$$ = new BehaviorSubject<Course[]>([]);

  constructor(private courseService: CoursesService) {
    this.initProps();
  }

  initProps() {
    this.isLoading$ = this.isLoading$$.asObservable();
    this.courses$ = this.courses$$.asObservable();
  }

  getAll() {
    this.isLoading$$.next(true);
    return this.courseService.getAll().pipe(
      map((courses) => this.courses$$.next(courses)),
      finalize(() => this.isLoading$$.next(false))
    );
  }
  createCourse(course: CourseCreate) {
    this.isLoading$$.next(true);
    return this.courseService.createCourse(course).pipe(
      map((courses) => this.courses$$.next(courses)),
      finalize(() => this.isLoading$$.next(false))
    );
  }
  editCourse(course: CourseCreate, id: string) {
    this.isLoading$$.next(true);
    return this.courseService.editCourse(course, id).pipe(
      map((courses) => this.courses$$.next(courses)),
      finalize(() => this.isLoading$$.next(false))
    );
  }
  getCourse(id: string) {
    this.isLoading$$.next(true);
    return this.courseService
      .getCourse(id)
      .pipe(finalize(() => this.isLoading$$.next(false)));
  }
  deleteCourse(id: string) {
    this.isLoading$$.next(true);
    return this.courseService
      .deleteCourse(id)
      .pipe(finalize(() => this.isLoading$$.next(false)));
  }
}
