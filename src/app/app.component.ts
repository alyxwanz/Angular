import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './auth/services/auth.service';
import { UserStoreService } from './user/services/user-store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'courses-app';
  faCoffee = faCoffee;
  faEdit = faEdit;
  faTrash = faTrash;
  subscriptions = new Subscription();

  private isAuthorized$ = this.authService.isAuthorized$;

  constructor(
    private authService: AuthService,
    private userStoreService: UserStoreService
  ) {}

  ngOnInit(): void {
    const subs = this.isAuthorized$
      .pipe(switchMap(() => this.userStoreService.getUser()))
      .subscribe();
    this.subscriptions.add(subs);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
