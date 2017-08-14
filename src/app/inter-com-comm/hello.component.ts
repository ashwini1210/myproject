import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
   <div class="row">
   <div class="col-md-12">
    <img [src] ="'../assets/' +imgNm.imgs[0] "  alt="../assets/happy.png"/>
    <img [src] ="'../assets/' +imgNm.imgs[1] "  alt="../assets/happy.png"/>
    <img [src] ="'../assets/' +imgNm.imgs[2] "  alt="../assets/happy.png"/>
   </div>
   </div>
  `,
  styles: []
})
export class HelloComponent implements OnInit {

  @Input()
  imgNm: string;

  constructor() {
  }

  ngOnInit() {
  }

}
