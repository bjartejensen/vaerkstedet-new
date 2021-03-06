import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: 'app-carousel button'
})
export class CarouselButtonDirective {

  focus = false;
  background: string;

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  constructor(el:ElementRef) { 
 
  }

  @HostBinding('color') color: string;

  @HostListener('click') newColor() {
    
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.possibleColors[colorPick];
   
  }

  @HostListener('mouseover')
  onFocus(){
    this.focus = true;
    this.color ="red";
  }

  @HostListener('mouseleave')
  onBlur(){
    this.focus = false;
  }

}
