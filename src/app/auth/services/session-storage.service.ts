import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private readonly KEY = 'TOKEN_KEY';

  constructor(private window: Window) {}

  setToken(token: string) {
    this.window.sessionStorage.setItem(this.KEY, token);
  }
  getToken(): string {
    return this.window.sessionStorage.getItem(this.KEY) || '';
  }
  deleteToken() {
    this.window.sessionStorage.removeItem(this.KEY);
  }
}
