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
      style({opacity:0,transform: "translateX(-20px)"}),
      animate(`3000ms 300ms ${trnsIn}`)
    ]),
    transition(":leave",[
      animate(`3000ms 300ms ${trnsIn}`,style({opacity:0,transform: "translateX(20px)"}))
    ]),

    

  ])


  export const routeTransitionAnimations = trigger('triggerName', [

    transition('void => *, * => void', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          overflowY:"hidden",
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({ top: '-100vh', opacity: 0 })]),
      query(':leave', animateChild()),
      group([
            query(':leave', [animate('10ms 2000ms ease-out', style({ top: '1200vh', opacity: 0 }))]),
            query(':enter', [animate('10ms 2000ms ease-out', style({ top: '0%', opacity: 1 }))])
          ]),
      query(':enter', animateChild())
      ])
  ]);
