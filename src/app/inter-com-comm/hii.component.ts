import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hii',
  template: `
  
    <ul>
    <li (click)="onCar()">Car</li>
    <li (click)="onBike()">Bikes</li>
    <li>Watches</li>
    <li>Shoes</li>
    <li>Sarees</li>
    </ul>

  `,
  styles: []
})
export class HiiComponent implements OnInit {

  @Output()
  imgEv: EventEmitter<any>;

  constructor() {
    this.imgEv = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onCar() {
    this.imgEv.emit({
      imgs :[
        'happy.png','sad.jpg','simley.jpg'
      ]
    });
   
  }
  onBike() {
    this.imgEv.emit('sad.jpg');
   
  }
}



