import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author, AuthorsResponse } from '../interface/authors-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  private BASE = 'http://localhost:3000';

  getAll(): Observable<Author[]> {
    return this.http
      .get<AuthorsResponse>(`${this.BASE}/authors/all`)
      .pipe(map((res) => res.result));
  }

  addAuthor(name: string): Observable<any> {
    return this.http.post(`${this.BASE}/authors/add`, { name });
  }

  editAuthor(name: string, id: string) {
    return this.http.put(`${this.BASE}/authors/${id}`, { name });
  }

  getAuthor(id: string) {
    return this.http.get(`${this.BASE}/authors/${id}`);
  }

  deleteAuthor(id: string) {
    return this.http.delete(`${this.BASE}/authors/${id}`);
  }
}
