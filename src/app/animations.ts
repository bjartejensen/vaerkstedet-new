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


  export let specific = animation([]);

  export let bounceOutLeftAnimation = animation(
    animate("{{duration}} 2s {{ease}}",keyframes([
      style({offset:0.2,opacity: 0.6}),
      style({offset:0.5,opacity: 0}),
      style({offset:1,opacity: 1}),
    ])),{params:{duration: "1s", ease: "ease-out"}}
  )

  export const specficTrig: AnimationTriggerMetadata=
  trigger("specficTrig",[
    transition(":enter",[
      query("h5",[style({transform: "translateY(-40px)",opacity:"0"}),
        stagger(400,style({transform: "translateY(-240px)",opacity:"0"})),
        animate(240)
    ]),
      group([
        query(".dir",[
          style({transform:"translateY(-20px)",opacity:"0"}),
          animate(400)
        ]),
        query(".state",[style({transform:"translateX(120px)",opacity:"0"}),
        animate(400)])
      ])
    ])
  ])

  export const fadeKeyFrame: AnimationTriggerMetadata = 
  
  trigger("fadeKeyFrame",[

    transition(":enter",    
    [ 
      useAnimation(bounceOutLeftAnimation,{params:{duration:"0.5s",ease:"ease"}}),
      style({backgroundColor: "green"}),
      animate(2000),
      ] )]);


  export const show = trigger("show", [
    transition(":enter", [
      style({ opacity: 0, transform: "translateY(-10px)" }),
      animate("250ms 400ms", style({ opacity: 1, transform: "translateY(0px)" })),
    ]),
  ]);

  export const btnClicked:AnimationTriggerMetadata =
  trigger("btnClicked",[
    state(":enter",style({transform:"translateX(0%)"})),
    state("left",style({transform:"translateX(-100%)"})),
    state("right",style({transform:"translateX(100%)"})),
    state("center",style({transform:"translateX(0%)"})),
    transition("*=>left",[
      animate(1300)
    ])
  ])

  export const outAndIn = trigger("outAndIn",[
    state('in', style({ transform: 'translateX(0)' })),
    transition('in => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(100)
    ]),
    transition('* => in', [
      animate(100, style({ transform: 'translateX(100%)' }))
    ])
  ])
  
 
