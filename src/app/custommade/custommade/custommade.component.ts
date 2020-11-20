import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { loadUnload } from 'src/app/animations';
import { LayoutService } from 'src/app/services/layout.service';
import { CustommadeService } from '../custommade.service';

export const trns:string = "cubic-bezier(.02,.95,.05,.99)";

@Component({
  selector: 'app-custommade',
  templateUrl: './custommade.component.html',
  styleUrls: ['./custommade.component.scss'],
  animations: [loadUnload,
  trigger('imagefun',[
    state("start",
    style({opacity: 1, borderRadius:"0%",clipPath: "inset(0% 0px 0px 0px)"}) 
    ),
   /*  transition(":enter",[
      style({opacity:0,width:"100vw"}),
      animate(4000,style({opacity:1})),animateChild()]), */
    transition("*=>start",[
       query(":self",[
          style({transform:"translate(-120px,0px)", clipPath: "inset(0% 100% 0px 0px)"}),
          animate(`400ms 0ms ${trns}`) 
        ]) 
     
      ])
  ])
  ]
})
export class CustommadeComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  state:string;

  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[];

  constructor(public layoutService:LayoutService,
      private customService:CustommadeService) { }

  ngOnInit(): void {

    this.layoutService.scrollToSection("top","auto");

    this.setImages();
    this.setHeader();
    this.setContentOne();
    this.setContentTwo();

  }

  onLoadDone(event){
    this.state = "start";
  }

  onAnimDone(event:AnimationEvent){
    console.log("ev: ", event);
  }

  private setHeader(){
    this.header = this.customService.getHeader();
  }

  private setContentOne(){
    this.contentOne = this.customService.getContentOne();
  }

  private setContentTwo(){
    this.contentTwo = this.customService.getContentTwo();
  }

  private setImages(){
    this.images = this.customService.getImages();
  }

}
