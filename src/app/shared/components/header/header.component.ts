import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name$: Observable<string> = this.userStoreService.name$;
  isAuthorized$: Observable<boolean> = this.authService.isAuthorized$;

  constructor(
    private userStoreService: UserStoreService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout().pipe(take(1)).subscribe();
  }
}
