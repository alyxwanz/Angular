import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  isAdmin$!: Observable<boolean>;
  name$!: Observable<string>;

  private isAdmin$$ = new BehaviorSubject<boolean>(false);
  private name$$ = new BehaviorSubject<string>('');

  constructor(private userService: UserService) {
    this.initProps();
  }

  initProps() {
    this.isAdmin$ = this.isAdmin$$.asObservable();
    this.name$ = this.name$$.asObservable();
  }

  getUser() {
    this.userService.getUser().pipe(
      tap((user) => {
        if (user.role === 'admin') {
          this.isAdmin$$.next(true);
        }
      })
    );
  }
}
