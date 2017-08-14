import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-shopout',
  template: `
       
       <br/>
       <br>
        <ul class="list-group">
        <li class="list-group-item active" (click)="onCar()">Car</li>
        <li class="list-group-item" (click)="onSaree()">Saree</li>
        <li class="list-group-item" (click)="onDress()">Dress</li>
        <li class="list-group-item" (click)="onSJeans()">jeans</li>
    </ul>`,
  styles:
   [`
     li { 
       cursor: pointer; cursor: hand;
       color:red;

      }



}
  `]
})
export class ShopoutComponent implements OnInit {
  
  @Output()
  imgEv:EventEmitter<any>

  constructor() { 
    this.imgEv = new EventEmitter<string>();
  }

  ngOnInit() {
  }

onCar(){
  this.imgEv.emit({
      imgs :[
        'car/car1.jpg','car/car2.jpg','car/car3.jpg','car/car4.jpeg','car/car6.jpg' ,'car/car7.jpg', 'car/car8.jpg'
        ,'car/car9.jpg'
      ]
    });
}

onSaree(){
    this.imgEv.emit({
      imgs:[
        'saree/saree1.jpg', 'saree/saree2.jpg', 'saree/saree3.jpg', 'saree/saree4.jpg',  'saree/saree5.jpg',  'saree/saree6.jpg', 'saree/saree7.jpg', 'saree/saree8.jpg',

      ]
    });
}
}