import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourseModule } from '../course/course.module';


@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule, SharedModule, CourseModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
