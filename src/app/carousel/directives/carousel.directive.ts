import { Directive, ElementRef, OnInit, OnDestroy, HostBinding, Input, AfterViewInit, Renderer2, Output, EventEmitter } from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';
import {debounceTime, throttleTime} from "rxjs/operators"
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit,AfterViewInit,OnDestroy {

  backBtn: HTMLElement;
  backBtnObs$: Observable<any>;
  backBtnSub:Subscription;

  nextBtn: HTMLElement;
  nextBtnObs$: Observable<any>;
  nextBtnSub:Subscription;

  transitionEndObs$:Observable<any>;
  transitionEndSub:Subscription;

  carouselSlide: HTMLElement;
  carouselImages:NodeList;

  selectedIdx=1;
  imageSize:number;

  @Input() maxIdx;
  @Input() speed:number =400;
  @Input() easing:string ="ease-in-out";
  @Output() idx:EventEmitter<number> = new EventEmitter();
  
  constructor(private el: ElementRef, private renderer: Renderer2,
    breakpointObserver: BreakpointObserver) {

      breakpointObserver.observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait
      ]).subscribe(result => {
        if (result.matches) {
        }
      });
    }

   ngOnInit(){
   }

   ngAfterViewInit(){
    this.setBtns();
    this.setCarouselSlide();
    this.setEventListeners();
    this.setImages();
    this.init();
    
   }

   ngOnDestroy(){
    this.removeEventListeners();
   }

  //#region Getter

   private get transitionStr():string{
    return `${this.speed}ms transform ${this.easing}` 
  }

  private get translateXStr(){
    return `translateX(${-this.imageSize*this.selectedIdx}px)`
  }

  //#endregion


  //#region Private Methods
  private init(){
    this.carouselSlide.style.transform = this.translateXStr;
  }

  private setImages(){
    this.imageSize = this.el.nativeElement.clientWidth;
  }

  private setCarouselSlide(){
    this.carouselSlide = document.querySelector("#carousel-slide");
  }

  private setBtns(){
    this.backBtn = document.querySelector(".backBtn");
    this.nextBtn = document.querySelector(".nextBtn");
  }

  private removeEventListeners(){
    
    if(this.backBtnObs$){
      this.backBtnSub.unsubscribe();
    }

    if (this.nextBtnObs$){
      this.nextBtnSub.unsubscribe();
    }
    
    if(this.transitionEndObs$){
      this.transitionEndSub.unsubscribe();
    }

   }

  private setTransitionEndObs(){

    this.transitionEndObs$ = fromEvent(this.carouselSlide,"transitionend");
    this.transitionEndSub = this.transitionEndObs$.subscribe(()=>{

      if(this.selectedIdx===0){

        this.renderer.setStyle(this.carouselSlide,"transition","none");
        this.selectedIdx=this.maxIdx-1;
        let t = `translateX(${-this.imageSize*this.selectedIdx}px)`;
        this.renderer.setStyle(this.carouselSlide,"transform",t);
      } 

      if(this.selectedIdx===this.maxIdx){

        this.renderer.setStyle(this.carouselSlide,"transition","none");
        this.selectedIdx=1;
        let t = `translateX(${-this.imageSize*this.selectedIdx}px)`;
        this.renderer.setStyle(this.carouselSlide,"transform",t);
      } 
    })

  }

  private setBackBtnObs(){

    this.backBtnObs$ = fromEvent(this.backBtn,"click").pipe(throttleTime(500));
    this.backBtnSub =this.backBtnObs$.subscribe(()=>{
        this.renderer.setStyle(this.carouselSlide,"transition",this.transitionStr);
        this.selectedIdx--;
        this.renderer.setStyle(this.carouselSlide,"transform",this.translateXStr);
        this.idx.emit(this.selectedIdx);
    })

  }

  private setNextBtnObs(){

    this.nextBtnObs$ = fromEvent(this.nextBtn,"click").pipe(throttleTime(500));
    this.nextBtnSub = this.nextBtnObs$.subscribe(()=>{
      this.renderer.setStyle(this.carouselSlide,"transition",this.transitionStr);
      this.selectedIdx++;
      this.renderer.setStyle(this.carouselSlide, "transform",this.translateXStr);
      this.idx.emit(this.selectedIdx);
    })

  }

  private setEventListeners(){

    this.setBackBtnObs();
    this.setNextBtnObs();
    this.setTransitionEndObs();
  }

  //#endregion

  

}
