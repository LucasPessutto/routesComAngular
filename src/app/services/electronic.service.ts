import { map, delay } from 'rxjs/operators';
import { Electronic } from './../models/electronic';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  private electronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([])
  public electronics$ = this.electronicSubject$.asObservable()

  constructor() {
    timer(1000)
      .subscribe(() => {
        this.electronicSubject$.next([
          { name: "Headphone", brand: "Razer", price: 259, description: "Noise Cancelling" },
          { name: "Monitor 23", brand: "Acer", price: 740, description: "HDMI/VGA" },
          { name: "Smartphone", brand: "Apple", price: 4560, description: "IOS System" },
          { name: "Portable HD", brand: "Samsung", price: 120, description: "2TB Hard Disk" }
        ])
      })
  }

  get(i: number): Observable<Electronic | any> {
    return this.electronics$.pipe(
      map(electronics => (i >= 0 && i < electronics.length) ? electronics[i] : null),
      delay(1000)
    )
  }
}
