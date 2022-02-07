import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.authService
      .login(this.name, this.email, this.password)
      .pipe(take(1))
      .subscribe();
  }
}
