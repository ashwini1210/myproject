import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atrr-binding',
  templateUrl: './atrr-binding.component.html',
  styleUrls: ['./atrr-binding.component.css']
})
export class AtrrBindingComponent implements OnInit {

  x;
  y;
  size;
  color;
  bgcolor;
  name:string;


  constructor() {
    this.x=true;
    this.y=true;

    this.size=30
    this.color='yellow'
    this.bgcolor='red'
    this.name="Fname";
   }

  ngOnInit() {
  }

}
