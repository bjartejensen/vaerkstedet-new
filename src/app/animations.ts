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

  export let sage: AnimationTriggerMetadata =
  trigger("sage",[
    transition(":enter",[
      style({transform:"translateY(-40%)",opacity:0}),
      animate("700ms 1200ms",style({transform:"translateY(0%)",opacity:1}))
    ]),
    transition(":leave",[
      animate(500,style({opacity:0,transform:"translateY(40%)"}))
    ])
  ])

  export let sageDynamic: AnimationTriggerMetadata =
  trigger("sageDynamic",[
    
    transition(":enter",[
      group([
        query(".darken-overlay",[
          style({backgroundColor: "rgba(0,0,0, 0.7)"}),
          animate("1200ms 400ms cubic-bezier(.34,.45,.52,.75)", 
          keyframes([
            style({offset:0.1,backgroundColor: "rgba(0, 0, 0, 0.7)"}),
            style({offset:0.2,backgroundColor: "rgba(0, 0, 0, 0.7)"}),
            style({offset:0.5,backgroundColor: "rgba(0, 0, 0, 0.45)"}),
            style({offset:0.85,backgroundColor: "rgba(0, 0, 0, 0.15)"}),
            style({offset:1,backgroundColor: "rgba(0, 0, 0, 0.0)"}), 
          ]))]
        ),
       query(":self",[
          style({transform:"translateY(20%)",opacity:0}),
          animate("400ms 400ms ease-in-out",
              style({transform:"translateY(0%)",opacity:1}))]
        ),
        query(".header",[
          style({transform:"translateY(40%)",opacity:0 }),
          animate("1400ms 200ms cubic-bezier(.38,.87,0,.74)",
          keyframes([
            style({offset: 0.0,color:"white",transform:"translateY(30%)",opacity:0.2 }),
            style({offset: 0.65, color:"white",transform:"translateY(20%)",opacity:0.5}),
            style({offset: 0.80, color:"white",transform:"translateY(10%)",opacity:0.9}),
            style({offset: 0.85, color:"white",transform:"translateY(0%)"}),
            style({offset: 1, color:"black",transform:"translateY(0%)",opacity:1}),
            
          ])
          
          )]
        ),
        animateChild()
      ]) 
    ]),
    transition(":leave",[
      group([
        query(":self",[
          animate("300ms 300ms ease-out",
          style({opacity:0,transform:"translateY(-5%)",position:"absolute"}))]
        ),
        
        
        query(".header",[
          animate("600ms 100ms cubic-bezier(.85,0,.38,.9)", 
              style({transform:"translateY(-100%)",opacity:0.5}))]
        ),
        
      ])
        
    ]) 
  ])

  export let bounceOutLeftAnimation = animation(
    animate("{{duration}} 2s {{ease}}",keyframes([
      style({offset:0.2,opacity: 0.6}),
      style({offset:0.5,opacity: 0}),
      style({offset:1,opacity: 1}),
    ])),{params:{duration: "1s", ease: "ease-out"}}
  )
  //query(".out-of-focus",[style({transform:"translateX(-200%)"})])),
  export const slider: AnimationTriggerMetadata =
  trigger("slider",[
    state("left",style({})),
    
    transition("*=>left, left => left",[
      group([
        query(".out-of-focus",
            [style({transform:"translateX(-100%)"}),
            animate(400,style({transform:"translateX(0%)"})),
            animate("200ms 1000ms",style({transform:"translateX(-100%)"}))]),
       /*  query(".in-focus",
            [style({transform:"translateX(0%)"}),animate(400,style({transform:"translateX(100%)"}))])   */
      ])
    ])]);

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
  
 
