import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
    return this.userService.getUser().pipe(
      tap((user) => {
        const isAdmin = user.role === 'admin';
        this.isAdmin$$.next(isAdmin);
        this.name$$.next(user.name);
        console.log(user)
      })
    );
  }
}
