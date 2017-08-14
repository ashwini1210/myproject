import { Directive ,HostBinding , HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {
  @HostBinding('style.backgroundColor')
  bakCol: string;

  @HostBinding('style.border')
  bacbor:string;

  @HostListener('mouseenter')
  onIn()
  {
    this.bakCol='red';
    this.bacbor='1px solid black'
  }
  @HostListener('mouseleave')
  onOut(){
    this.bakCol='blue';
    this.bacbor='1px solid white'
  }



  constructor() { }

}
