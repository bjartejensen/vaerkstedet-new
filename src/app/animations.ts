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
    AnimationTriggerMetadata,
  } from "@angular/animations";

export const trns:string = "cubic-bezier(.02,.95,.05,.99)";
export const trnsOut:string = "cubic-bezier(.39,.08,1,-0.07)";
export const trnsIn:string = "cubic-bezier(0,.87,.12,1)";
export const slowStart:string = "cubic-bezier(1,0,1,-0.07)";

export const loadUnload = trigger("loadUnload",[

    transition(":enter",[
      group([
      query(":self",[
        style({opacity:0,transform: "translateX(-20px)"}),
        animate(`3000ms 300ms ${trnsIn}`),animateChild()
      ]),
      query(".img", [
        style({opacity:0,transform: "translateX(-20px)"}),
      animate(`400ms 2800ms`),animateChild()
      ], {optional: true}),
      query(".logo",[
        style({opacity:0}),
      animate(`3000ms 0ms ${trnsIn}`,
      keyframes( 
        [
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 1, offset: 0.1 }),
        style({ opacity: 1, offset: 0.9 }),
        style({ opacity: 0.2,  offset: 1 })
      ])),animateChild()
      ], {optional: true})
    
    ]) 
    ]),
    transition(":leave",[
      animate(`3000ms 300ms ${trnsIn}`,style({opacity:0,transform: "translateX(20px)"}))
    ]),

])

 
