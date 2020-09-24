import { Component, OnInit, ViewChildren, AfterViewInit, HostBinding, QueryList } from '@angular/core';
import { show, outAndIn,fadeKeyFrame,specficTrig,btnClicked,slider } from "src/app/animations";
import { CarouselButtonDirective } from '../directives/carousel-button.directive';
import {MatButtonModule} from '@angular/material/button';
import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
  state,
  keyframes,
  stagger,
  useAnimation,
  AnimationAnimateMetadata,
  AnimationTriggerMetadata,
} from "@angular/animations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [show,outAndIn,fadeKeyFrame,specficTrig,btnClicked,slider]

  

})
export class CarouselComponent implements OnInit, AfterViewInit {


  @ViewChildren(CarouselButtonDirective)
  viewChildren: QueryList<CarouselButtonDirective>;

  images: any[]=[]
 
  constructor() { }

  ngOnInit(): void {
    this.setImages();
  }

  ngAfterViewInit(){
  }

  private setImages(){
    this.images.push("../../../assets/img/3.jpg");
    this.images.push("../../../assets/img/1.jpg");
    this.images.push("../../../assets/img/2.jpg");
    this.images.push("../../../assets/img/3.jpg");
    this.images.push("../../../assets/img/1.jpg");
  }

 

 

}
