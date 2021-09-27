import { Book } from './../../models/book';
import{  BookService } from '../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$!: Observable<Book | any>
  index!: number | any
  authors: string[] = []

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.book$ = this.route.paramMap
      .pipe(
        tap((params: ParamMap | any) => this.index = params.get('index')),
        switchMap((params: ParamMap | any) => this.bookService.get(params.get('index'))),
        tap((b: Book) => this.authors = (b) ? b.authors : []))
  }

  remove() {
    this.bookService.remove(this.index)
    this.router.navigate(['/books'])
  }

  goAuthors() {
    let url = '/books/' + this.index + '/authors'
    this.router.navigate([url, {authors: this.authors}])
  }

}
