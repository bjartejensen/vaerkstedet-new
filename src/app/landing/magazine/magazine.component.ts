import { animate, animateChild, group, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

/* keyframes([
  style({offset:"0.2",backgroundColor: "{{overlay}},1)" }),
  style({offset:"0.4",backgroundColor: "{{overlay}},0.75)"}),
  style({offset:"0.6",backgroundColor: "{{overlay}},0.5)"}), */

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss'],
  animations:[

    trigger("fadein",
    [
      transition(":enter",
      [style({transform:"translateY(-60px)",opacity:0}),
      animate("2250ms 0ms cubic-bezier(.02,.95,.05,.99)")
    ])]),

    trigger("slide",
    [
      transition("void=>init",
        [style({opacity:0, 
          backgroundColor:"rgba(0,0,0,0.75)",
          transform: "scale(0.75)"}),
        animate("400ms 400ms")]
      ),
      transition("*=>void",
        [
        animate("400ms 400ms",style({opacity:0, 
          backgroundColor:"rgba(0,0,0,0.75)",
          transform: "scale(0.75)"}))]
      ),

      transition("init=>push",
      [
        group([
          query('.content',
          animate("10ms 0ms",style({opacity: 0,transform:"translateX(100%)"}))
        ),
          query('.img-container',[
         
          animate("200ms 200ms",
            style({opacity:0,transform:"translateX(10%)"})
          ),
          style({justifyContent: "flex-start"}),
          animate("200ms 200ms",style({transform:"translateX(-10%)"})),
          ])
        ]),
        query('.img-container',[
          style({justifyContent: "flex-start",opacity:0.71}),
          animate("600ms 0ms cubic-bezier(.02,.95,.05,.99)",style({justifyContent: "flex-start", opacity:1, transform:"translateX(0%)"})),
          
        ]),animateChild()
      ]
      )
    ])
  ]
})
export class MagazineComponent implements OnInit {

  @Input() imgUrl:string ="../../assets/img/landing/1.jpg";
  @Input() header:string ="Forestil dig en smykkebutik...";
  @Input() subHeader:string ="der værner om kundeoplevelsen...";
  @Input() btnCaption:string ="Hejsa";

  constructor() { }

  state:boolean =false;
  step:boolean = false;
  complete:boolean = false;
  finalize:boolean = false;
  bounceBack:boolean = false;

  ngOnInit(): void {
  }

  onClick(){
    this.state=!this.state;
  }

  onFadeInDone(){

    this.bounceBack = true;
  }

  onAnimationDone(event: AnimationEvent){
    
    if(event["toState"]==="push"){
      
      setTimeout(() => {
        this.finalize = true;
      }, 1200);
    }

  }

  onAnimationStart(event: AnimationEvent){

    if(event["toState"]==="push"){
      setTimeout(() => {
        this.complete = true;  
      }, 500);
    }

  }

  public get stateStr(){
    return this.state ? "push":"init";
  }

 
  

}
