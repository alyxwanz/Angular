import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private readonly KEY = 'TOKEN_KEY';

  constructor() {}

  setToken(token: string) {
    sessionStorage.setItem(this.KEY, token);
  }
  getToken(): string {
    return sessionStorage.getItem(this.KEY) || '';
  }
  deleteToken() {
    sessionStorage.removeItem(this.KEY);
  }
}
