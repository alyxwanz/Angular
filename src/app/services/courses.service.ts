import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Course,
  CourseCreate,
  CourseResponse,
} from '../interface/courses-interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Course[]> {
    return this.http
      .get<CourseResponse>('http://localhost:3000/courses/all')
      .pipe(map((res) => res.result));
  }

  // todo
  createCourse(course: CourseCreate): Observable<Course[]> {
    return this.http.post<Course[]>(
      'http://localhost:3000/courses/add',
      course
    );
  }

  editCourse(course: CourseCreate, id: string): Observable<Course[]> {
    return this.http.put<Course[]>(
      `http://localhost:3000/courses/${id}`,
      course
    );
  }

  getCourse(id: string) {
    return this.http.get(`http://localhost:3000/courses/${id}`);
  }

  deleteCourse(id: string) {
    return this.http.delete(`http://localhost:3000/courses/${id}`);
  }
}
