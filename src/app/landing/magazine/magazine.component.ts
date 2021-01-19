import { animate, animateChild, animation, group, keyframes, query, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { LandingService } from '../landing.service';

/* keyframes([
  style({offset:"0.2",backgroundColor: "{{overlay}},1)" }),
  style({offset:"0.4",backgroundColor: "{{overlay}},0.75)"}),
  style({offset:"0.6",backgroundColor: "{{overlay}},0.5)"}), */

export const trns:string = "cubic-bezier(.02,.95,.05,.99)";
export const trnsOut:string = "cubic-bezier(.39,.08,1,-0.07)";
export const trnsIn:string = "cubic-bezier(0,.87,.12,1)";
export const slowStart:string = "cubic-bezier(1,0,1,-0.07)";

export let contentStylessdas = style({opacity:1, background:"rgba(244, 204, 201, 0.7)", transform:"translateY(0px)" },)
export let contentState = state('complete',style({background:"{{background}}"}),
{
  params:{
    background:"rgba(244, 204, 201, 0.7)"
  }
}

)

export let contentSeqAnimation = animation(
  animate("300ms {{delay}} ease-in"),
  {
    params:{
      delay:"300ms",
    }
  }
)

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss'],
  animations:[

    trigger('contentseq',[
      //state('complete',style({opacity:1, background:"rgb(244,204,201,0.0)", transform:"translateY(0px)" })),
      contentState,
      transition("*=>complete",[
        style({opacity:0}),
        useAnimation(contentSeqAnimation)
      ]
       )
    ]),
 
    trigger("fadein",
    [
      transition(":enter",
      [style({transform:"translateY(-60px)",opacity:0}),
      animate("2250ms 0ms cubic-bezier(.02,.95,.05,.99)")
    ])]),

   /*  trigger("containerseq",[
      transition(":enter",
        [style({opacity:0, 
          backgroundColor:"rgba(0,0,0,0.75)",
          transform: "scale(0.75)"}),
        animate("400ms 400ms"),animateChild()]
      ),  
    ]), */

    trigger('headerseq',[
      state('change',style({opacity:0,transform:"translateY(0px)"})),
      state('complete',style({opacity:0,transform:"translateY(0px)",height:"0px", margin:"0%", padding:"0%", display:"none"})),
      transition(":enter",[
        style({transform:"translateY(-10px)"}),
        animate(`2000ms 100ms ${trns}`,style({opacity:1,transform:"translateY(0px)"})),
        //animate(`400ms 0ms`,style({opacity:0,transform:"translateX(100px)"})), 
        animateChild()
      ]),
      transition("*=>change",[
        //style({transform:"translateY(-10px)"}),
        //animate(`2600ms 1000ms ${trns}`,style({opacity:1,transform:"translateY(0px)"})),
        animate(`500ms 0ms ${trnsOut}`,style({opacity:0,transform:"translateY(120px)"})), 
        animateChild()
      ]),
     /*  transition("*=>complete",[
        style({opacity:0}),
        //animate(`2600ms 1000ms ${trns}`,style({opacity:1,transform:"translateY(0px)"})),
        animate(`1500ms 0ms ${slowStart}`,style({opacity:0.7,transform:"translateY(0px)"})), 
        animateChild()
      ]) */
    ]),

    trigger('subheaderseq',[
      state('void',style({opacity:1,transform:"translateY(10px)"})),
      //state('change',style({opacity:1,transform:"translateY(0px)"})),
      state('complete',style({opacity:1,transform:"translateY(0px)"})),
      transition("*=>complete",[
        animate("500ms 600ms")
      ])

    ]),

  /*   trigger("logoseq",[
      state('complete',style({opacity:1,transform:"translateX(0%)"})),
      transition("*=>complete",animate("300ms 1500ms"))
    ]), */

    trigger('btnseq',[
      state('complete',style({opacity:0.8,transform:"translateX(0%)"})),
      transition("*=>complete",animate("300ms 1000ms"))
    ]),

    

    trigger("imageseq",
    [
      state('void',style({opacity:0,transform:"translateY(10px)"})),
      state('*',style({opacity:1,width:"50vw",transform:"translateY(0px)"})),
      state('change',style({opacity:1,transform:"translateY(0px)"})),
      state('complete',style({opacity:1,transform:"translateX(0%)"})),
      state('rebound',style({opacity:0,transform:"translateX(0%)"})),
      
      transition(":enter",[animate(`800ms 800ms ${trns}`),animateChild()]),
      transition("*=>change",
      [
        animate(`400ms 0ms ${trnsOut}`,style({opacity: 0,transform:"translateX(100%)"})),
        animateChild()
      ]
      ),
      transition("*=>complete",
      [
        style({opacity:0,transform:"translateX(-100%)"}),
        animate(`1200ms 200ms ${trns}`),
        animateChild()
      ]
      )  
    
    ])
  

  
  ]
})
export class MagazineComponent implements OnInit {

  @Input() imgUrl:string ="../../assets/img/landing/1.jpg";
  @Input() header:string ="Forestil dig en smykkebutik...";
  @Input() subHeader:string ="der værner om kundeoplevelsen";
  @Input() btnCaption:string ="Læs mere her";
  @Input() url:string ="";
  @Input() backgroundColor:string = "transparent";

  isMobile:boolean = false;
  isDesktop: boolean = false;

  constructor(private landingService:LandingService, private layoutService:LayoutService) { 

    this.layoutService.isMobile$.subscribe(x=>{
      this.isMobile = x;
    })

    this.layoutService.isDesktop$.subscribe(x=>{
      this.isDesktop =x;
    })

  }

  state:boolean =false;
  step:boolean = false;
  complete:boolean = false;

  initComplete:boolean = false;

  changeStarted:boolean = false;

  finalize:boolean = false;
  bounceBack:boolean = false;

  startStates:string[]=["void","initstart","changestart","completestart"];
  endStates:string[]=["void","initend","changeend","completeend"];
  states:string[]=["void","init","change","complete","rebound"];

  currentStartState:string;
  currentEndState:string;
  currentState:string;

  showHeader:boolean = true;
  showSubHeader:boolean  = false;

  ngOnInit(): void {

    this.currentStartState = this.startStates[0];
    this.currentEndState =this.endStates[0];
    this.currentState =this.states[1];

  }

  public get logoUrl(){
    return  this.landingService.logoUrl; //"../../../assets/logo/logo-grey.png";
  }

  public get logoGoldUrl(){
    return  this.landingService.logoGoldUrl; //"../../../assets/logo/logo-grey.png";
  }



  onSubHeaderAnimation(event:AnimationEvent){

    const toState:string = event["toState"];
    const phaseName:string = event["phaseName"];

    if(phaseName==="start" && toState==="change"){
      this.showSubHeader = true;  
    }

  }

  onHeaderAnimation(event:AnimationEvent){

    const toState:string = event["toState"];
    const phaseName:string = event["phaseName"];

    if(phaseName==="done" && toState==="init"){
      this.currentState = this.moveState();
      //this.showHeader = false;
    }
    

  }

  onImageAnimation(event:AnimationEvent){
    
    const toState:string = event["toState"];
    const phaseName:string = event["phaseName"];

    if(phaseName==="done" && toState==="change"){
      this.currentState = this.moveState();
    }

  }

  onContainerAnimationStart(event){
    //this.currentStartState = this.moveStartState();
  }


  onContainerAnimationDone(event){
    this.initComplete = true;  
    //this.currentEndState = this.moveEndState();
    //this.currentStartState = this.moveStartState();

    setTimeout(() => {
      this.changeStarted = true;  
    }, 2000);
}

public moveState():string{

  const statesArr = [...this.states];
  const idx:number = statesArr.indexOf(this.currentState);

  if(idx<statesArr.length-1){
    return statesArr[idx+1];
  }

  return statesArr[0];
}

  
/*   onClick(){
    this.state=!this.state;
  }

  onFadeInDone(){

    this.bounceBack = true;
  }
 */
  /* onAnimationDone(event: AnimationEvent){
    
    if(event["toState"]==="push"){
      
      setTimeout(() => {
        this.finalize = true;
      }, 1200);
    }

  } */

  

/*   public get stateStr(){
    return this.state ? "push":"init";
  } */

 
  

}
