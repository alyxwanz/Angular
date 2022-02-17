import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel, UserResponce } from 'src/app/interface/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<UserModel> {
    return this.http.get<UserResponce>('http://localhost:3000/users/me').pipe(map((res) => res.result));
  }
}