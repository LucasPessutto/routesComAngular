import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.css']
})
export class BookAuthorsComponent implements OnInit {

  authors$!: Observable<string[] | any>

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log('BookAuthorsComponent')
    this.authors$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => (params.get('authors')?.split(',')))
      )
  }

}
