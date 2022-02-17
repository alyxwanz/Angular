import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from '../services/session-storage.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private sessionService: SessionStorageService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.isAuthorized$) {
      request = request.clone({
        setHeaders: {
          Authorization: this.sessionService.getToken(),
        },
      });
    }
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            console.log('Server response');
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              console.log('Unauthorized');
              this.router.navigate(['/login']);
            }
          }
        }
      )
    );
  }
}
