import { Electronic } from './../../models/electronic';
import { ElectronicService } from './../../services/electronic.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.css']
})
export class ElectronicListComponent implements OnInit {

  electronics$!: Observable<Electronic[]>

  constructor(private electronicService: ElectronicService) { }

  ngOnInit(): void {
    this.electronics$ = this.electronicService.electronics$
  }

}
