import { HttpClient } from '@angular/common/http';
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

  getAll() {
    this.isLoading$$.next(true);

    this.authorService.getAll().pipe(
      map((authors) => this.authors$$.next(authors)),
      finalize(() => this.isLoading$$.next(false))
    );
  }

  addAuthor(name: string) {
    this.isLoading$$.next(true);

    this.authorService.addAuthor(name).pipe(
      //TODO: check responce
      map((authors) => this.authors$$.next(authors)),
      finalize(() => this.isLoading$$.next(false))
    );
  }
}
