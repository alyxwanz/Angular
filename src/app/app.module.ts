import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CoursesModule } from './features/courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './features/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseEditComponent } from './features/course-edit/course-edit.component';
import { LoginComponent } from './features/login/login.component';
import { CoursesComponent } from './features/courses/courses.component';
import { CourseComponent } from './features/course/course.component';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canLoad: [AuthorizedGuard],
    children: [
      {
        path: 'edit/:id',
        component: CourseEditComponent,
        canLoad: [AuthorizedGuard],
      },
      {
        path: 'courses/:id',
        component: CourseComponent,
        canLoad: [AuthorizedGuard],
      },
      {
        path: 'courses/add',
        component: CourseEditComponent,
        canLoad: [AuthorizedGuard],
      },
    ],
  },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, RegistrationComponent, CourseEditComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesModule,
    SharedModule,
    LoginModule,
    RouterModule.forRoot(routes),
    // FontAwesomeModule,
    // NgbModule
  ],
  providers: [AuthorizedGuard, NotAuthorizedGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
