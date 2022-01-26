import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CoursesModule } from './features/courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './features/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseEditComponent } from './features/course-edit/course-edit.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CourseEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesModule,
    SharedModule,
    LoginModule
    // FontAwesomeModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
