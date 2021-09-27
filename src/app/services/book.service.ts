import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([])
  public books$ = this.bookSubject$.asObservable()

  constructor() {
    timer()
      .subscribe(() => this.bookSubject$.next([
        { title: "Book 1", pages: 210, authors: ["John", "Anne"] },
        { title: "Book 2", pages: 300, authors: ["Victor"] },
        { title: "Book 3", pages: 250, authors: ["Lucas"] },
        { title: "Book 4", pages: 350, authors: ["Fred"] },
        { title: "Book 5", pages: 410, authors: ["Peter", "Mily"] }
      ]))
  }

  add(b: Book) {
    this.bookSubject$.getValue().push(b)
  }

  remove(i: number) {
    let books = this.bookSubject$.getValue()
    if (i >= 0 && i<books.length) {
      books.splice(i, 1)
    }
  }

  get(i: number): Observable<Book | any> {
    return this.books$.pipe(
      map(books => (i >= 0 && i < books.length) ? books[i] : null),
      delay(1000)
    )
  }
}
