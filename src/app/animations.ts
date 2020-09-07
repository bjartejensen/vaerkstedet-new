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
  } from "@angular/animations";


  export const show = trigger("show", [
    transition(":enter", [
      style({ opacity: 0, transform: "translateY(-10px)" }),
      animate("250ms 400ms", style({ opacity: 1, transform: "translateY(0px)" })),
    ]),
  ]);

  export const moveleftright = trigger('moveleftright', [
    // ...
    state('left', style({
      transform: "translateX(-100%)",
      opacity: 0,
    })),
    state('right', style({
        transform: "translateX(100%)",
        opacity: 0,
    })),
    state('center', style({
        transform: "translateX(0px)",
        opacity: 1,
      })),
    transition('left => center', [
      animate('1s')
    ]),
    transition('left => right', [
        animate('1s')
      ]),
    transition('right => left', [
        animate('1s')
      ]),
    transition('center => right', [
      animate('0.5s')
    ]),
    transition('center => left', [
        animate('0.5s')
      ]),
  ])