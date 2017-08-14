import { Component, OnInit ,Input } from '@angular/core';
import { by } from 'protractor';
@Component({
  selector: 'app-shopin',
  template: 
  `
  <br><br>
   <div class="row">
   <div class="col-md-3" img-hover *ngFor="let img of imgNm.imgs">
   <img [src] ="'../assets/' +img"   width="150px" height="200px" >
   </div>
  
   </div>

   `,
  styles: [`
     img:hover
	{
		-moz-box-shadow: 0 0 10px #ccc;
		-webkit-box-shadow: 0 0 10px #ccc;
		box-shadow: 0 0 10px #ccc;
    -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
      }
      img{
        margin-bottom:50px;
      }

     
        
  `]
})
export class ShopinComponent implements OnInit {

@Input()
imgNm:string

  constructor() { }

  ngOnInit() {
  }

}
