import { Component, OnInit, ViewChildren, AfterViewInit, HostBinding, QueryList } from '@angular/core';
import { show, outAndIn,fadeKeyFrame,specficTrig,btnClicked } from "src/app/animations";
import { CarouselButtonDirective } from '../directives/carousel-button.directive';
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
  animations: [show,outAndIn,fadeKeyFrame,specficTrig,btnClicked]

  

})
export class CarouselComponent implements OnInit, AfterViewInit {


  @ViewChildren(CarouselButtonDirective)
  viewChildren: QueryList<CarouselButtonDirective>;

  images: any[]=[]
  

  selectedImgIdx:number = 1;
  selectedImgUrl:string;
  urlIfNext: string;
  urlIfBack:string;
  direction: string;

  constructor() { }

  ngOnInit(): void {
    this.setImages();
    this.selectedImgUrl = this.getImgUrl(this.selectedImgIdx);
    this.urlIfBack = this.getImgUrl(this.selectedImgIdx-1);
    this.urlIfNext = this.getImgUrl(this.selectedImgIdx+1);
  }

  ngAfterViewInit(){
  }

  @HostBinding('style.background') 
  get backgroundColor(){
      if(this.viewChildren){
        console.log(this.viewChildren.first.color);
        return this.viewChildren.first.color;
      }
      else{
        return "green";
      }
      
  }

  private setImages(){
    //this.images.push("../../../assets/img/3.jpg");
    this.images.push("../../../assets/img/1.jpg");
    this.images.push("../../../assets/img/2.jpg");
    this.images.push("../../../assets/img/3.jpg");
    //this.images.push("../../../assets/img/1.jpg");
  }

  onAnimationStart($event){
    console.log("event",$event);
  }


  public onButtonClicked(direction:string){

    this.direction = direction;

    switch (direction.toLowerCase()){

      case "next":
        this.moveNext();
        break;
      case "back":
        this.moveBack();
        break;
    } 

  } 

  public getImgUrl(idx):string{
    return this.images[idx];
  }

  private moveNext(){

      if(this.selectedImgIdx===this.maxIdx){
        this.selectedImgIdx=0;
        this.urlIfBack = this.getImgUrl(this.maxIdx);
        this.urlIfNext = this.getImgUrl(this.selectedImgIdx+1);
      }
      else{
        
        this.urlIfBack = this.getImgUrl(this.selectedImgIdx);
        this.selectedImgIdx++;
        let nIdx=this.selectedImgIdx===this.maxIdx?0:this.selectedImgIdx+1;
        this.urlIfNext = this.getImgUrl(nIdx);
      }

      this.selectedImgUrl = this.getImgUrl(this.selectedImgIdx);
  }

  private moveBack(){
    if(this.selectedImgIdx===0){
      this.selectedImgIdx=this.maxIdx;
      this.urlIfBack = this.getImgUrl(this.selectedImgIdx-1);
      this.urlIfNext = this.getImgUrl(0);
    }
    
    else{
      this.selectedImgIdx--;
      this.urlIfBack = this.getImgUrl(this.selectedImgIdx===0?this.maxIdx: this.selectedImgIdx-1);
      this.urlIfNext = this.getImgUrl(this.selectedImgIdx+1);
    }

    this.selectedImgUrl = this.getImgUrl(this.selectedImgIdx);
  }

  private get maxIdx(){
    return this.images.length-1;
  }

  public get transformLeftImg():string{
    
    let res = this.direction ==="back"?"center":"left";
    return res;
  }

  public get transformCenterImg(): string {
    let res = this.direction ==="in"?"out":"in";
    return res;
  }


  public get transformRightImg():string{
    
    let res = this.direction ==="forward"?"center":"right";
    return res;
  }

}
