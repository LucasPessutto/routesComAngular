import { Dvd } from './../../models/dvd';
import { DvdService } from './../../services/dvd.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  dvd$!: Observable<Dvd>
  title: any = null

  constructor(private route: ActivatedRoute, private dvdService: DvdService, private router: Router) { }

  ngOnInit(): void {
    let index: number | any = this.route.snapshot.paramMap.get('index')
    this.dvd$ = this.dvdService.get(index)
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        if (params.has('title'))
          this.title = params.get('title')
      })
  }

  goBack() {
    this.router.navigate(['/dvds'])
  }

}
