import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  LoginResponse,
  RegisterRequest,
  RegisterResponce,
} from 'src/app/interface/login-interface';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthorized$: Observable<boolean>;
  private isAuthorized$$ = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private sessionService: SessionStorageService,
    private router: Router
  ) {
    this.isAuthorized$ = this.isAuthorized$$.asObservable();
  }

  login(name: string, email: string, password: string) {
    return this.http
      .post<LoginResponse>('http://localhost:3000/login', {
        name,
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.sessionService.setToken(response.result);
          this.isAuthorized$$.next(true);
          this.router.navigate(['/courses']);
        })
      );
  }
  logout() {
    return this.http
      .delete('http://localhost:3000/logout', {
        headers: new HttpHeaders({
          Authorization: this.sessionService.getToken(),
        }),
      })
      .pipe(
        tap(() => {
          this.isAuthorized$$.next(false);
        })
      );
  }
  register(value: RegisterRequest) {
    return this.http
      .post<RegisterResponce>('http://localhost:3000/register', value)
      .pipe(tap(() => this.router.navigate(['/login'])));
  }
}
