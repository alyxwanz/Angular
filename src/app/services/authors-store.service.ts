import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { Author } from '../interface/authors-interface';

import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  isLoading$!: Observable<boolean>;
  authors$!: Observable<Author[]>;

  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private authors$$ = new BehaviorSubject<Author[]>([]);

  constructor(private authorService: AuthorsService) {
    this.initProps();
  }

  initProps() {
    this.isLoading$ = this.isLoading$$.asObservable();
    this.authors$ = this.authors$$.asObservable();
  }

  getAll(): Observable<Author[]> {
    this.isLoading$$.next(true);
    return this.authorService.getAll().pipe(
      tap((authors) => this.authors$$.next(authors)),
      finalize(() => this.isLoading$$.next(false))  
    );
  }

  addAuthor(name: string) {
    this.isLoading$$.next(true);
    return this.authorService.addAuthor(name).pipe(
      map((authors) => this.authors$$.next(authors)),
      finalize(() => this.isLoading$$.next(false))
    );
  }

  editAuthor(name: string, id: string) {
    this.isLoading$$.next(true);
    return this.authorService.editAuthor(name, id).pipe(
      // map((author) => this.authors$$.next(author)),
      tap((responce) => {
        console.log(responce);
      }),
      finalize(() => this.isLoading$$.next(false))
    );
  }

  getAuthor(id: string) {
    this.isLoading$$.next(true);
    return this.authorService
      .getAuthor(id)
      .pipe(finalize(() => this.isLoading$$.next(false)));
  }

  deleteAuthor(id: string) {
    this.isLoading$$.next(true);
    return this.authorService
      .deleteAuthor(id)
      .pipe(finalize(() => this.isLoading$$.next(false)));
  }
}
