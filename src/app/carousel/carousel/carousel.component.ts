import { Component, OnInit, ViewChildren, AfterViewInit, HostBinding, QueryList, Input } from '@angular/core';
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


 /*  @ViewChildren(CarouselButtonDirective)
  viewChildren: QueryList<CarouselButtonDirective>;
 */
  @Input() images: string[]=[]
  @Input() width: number=0;
  @Input() height: number=0;
 
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.setImages();
  }

  public get caroW(){
    return this.width +"px";
  }

  public get caroH(){
    return this.height +"px";
  }

  private setImages(){
    if(this.images && this.images.length>0){
      let arr = [...this.images];
      arr.unshift(this.images[this.images.length-1]);
      arr.push(this.images[0]);
  
      this.images = [];
      this.images = [...arr];
    }
    

  }

  private setImagesOld(){
    this.images.push("../../../assets/img/3.jpg");
    this.images.push("../../../assets/img/1.jpg");
    this.images.push("../../../assets/img/2.jpg");
    this.images.push("../../../assets/img/3.jpg");
    this.images.push("../../../assets/img/1.jpg");
  }

 

 

}
