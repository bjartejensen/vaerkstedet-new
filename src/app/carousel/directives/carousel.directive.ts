import { Directive, ElementRef, OnInit, OnDestroy, HostBinding, Input, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit,AfterViewInit,OnDestroy {

  backBtn: HTMLElement;
  nextBtn: HTMLElement;
  carouselSlide: HTMLElement;

  carouselImages:NodeList;

  @Input() maxIdx;
  selectedIdx=1;

  imageSize:number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

   ngOnInit(){
     
   
   }

   ngAfterViewInit(){

    this.setBtns();
    this.setCarouselSlide();
    this.setImages();
    this.init();
    this.setEventListeners();

   }

   ngOnDestroy(){}

  setEventListeners(){

    this.backBtn.addEventListener("click",()=>{
      
     if(this.selectedIdx===0){
        this.selectedIdx=this.maxIdx;
      } 
      else{
        this.selectedIdx--;
      }

      this.renderer.setStyle(this.carouselSlide,
                              "transform",
                              `translateX(${-this.imageSize*this.selectedIdx}px)`);

      //this.carouselSlide.style.transform = `translateX(${-this.imageSize*this.selectedIdx}px)`

    })

    this.nextBtn.addEventListener("click",()=>{
      
      if(this.selectedIdx===this.maxIdx){
        this.selectedIdx=0;
      }
      else{
        this.selectedIdx++;

        if(this.selectedIdx===this.maxIdx){

          //debugger;

          let t = `translateX(${-this.imageSize}px)`;

          this.renderer.setStyle(this.carouselSlide,
            "transform",
            `translateX(${-this.imageSize}px)`);

        }

      }


      
      
      this.renderer.setStyle(this.carouselSlide,
        "transform",
        `translateX(${-this.imageSize*this.selectedIdx}px)`);

    })
  }

  private get translateXStr(){
    return `translateX(${-this.imageSize*this.selectedIdx}px)`
  }


  init(){
    this.carouselSlide.style.transform = this.translateXStr;
  }

  setImages(){
    this.imageSize = this.el.nativeElement.clientWidth;
  }

  setCarouselSlide(){
    
    this.carouselSlide = document.querySelector("#carousel-slide");
    
  }

  setBtns(){
    this.backBtn = document.querySelector(".backBtn");
    this.nextBtn = document.querySelector(".nextBtn");
  }

}
