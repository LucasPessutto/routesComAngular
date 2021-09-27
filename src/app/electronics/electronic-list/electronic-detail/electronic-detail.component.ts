import { Electronic } from './../../../models/electronic';
import { Observable } from 'rxjs';
import { ElectronicService } from './../../../services/electronic.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-electronic-detail',
  templateUrl: './electronic-detail.component.html',
  styleUrls: ['./electronic-detail.component.css']
})
export class ElectronicDetailComponent implements OnInit {

  electronic$!: Observable<Electronic>

  constructor(private eletronicService: ElectronicService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let i: number | any = this.route.snapshot.paramMap.get('index')
    this.electronic$ = this.eletronicService.get(i)
  }

  back() {
    this.router.navigate(['..'], {relativeTo: this.route})
  }

}
