import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  colors=['red','blue','white','black','green'];
   color='blue';

  constructor() { }

  ngOnInit() {
  }

}
