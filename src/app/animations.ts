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




  const sageDuration ="1200ms";
  const sageDelay = "400ms";
  const overlayColor="rgba(0,0,0";
  const bezier: string = "cubic-bezier(.34,.45,.52,.75)";

  let sageBlackOverlay
      = animation(
        animate("{{duration}} {{delay}} {{ease}}",
        keyframes([
          style({offset:"0.2",backgroundColor: "{{overlay}},1)" }),
          style({offset:"0.4",backgroundColor: "{{overlay}},0.75)"}),
          style({offset:"0.6",backgroundColor: "{{overlay}},0.5)"}),
          style({offset:"0.8",backgroundColor: "{{overlay}},0.25)"}),
          style({offset:"1",backgroundColor: "{{overlay}},0)"}), 
         ])),{params:{duration: "1s",
                      overlay:"rgba(0,0,0,0.75)", 
                      delay: "400ms", 
                      ease: "ease-out"}});

  let sageEnter 
      = animation(animate("1400ms 200ms cubic-bezier(.38,.87,0,.74)",
      keyframes([
        style({offset: 0.0,color:"white",transform:"translateY(30%)",opacity:0.2 }),
        style({offset: 0.65, color:"white",transform:"translateY(20%)",opacity:0.5}),
        style({offset: 0.80, color:"white",transform:"translateY(10%)",opacity:0.9}),
        style({offset: 0.85, color:"white",transform:"translateY(0%)"}),
        style({offset: 1, color:"black",transform:"translateY(0%)",opacity:1}),
      ])),{params:{duration: "1s",
      overlay:"rgba(0,0,0,0.75)", 
      delay: "400ms", 
      ease: "ease-out"}});

  let sageLeave 
      = animation(animate("1400ms 200ms cubic-bezier(.38,.87,0,.74)",
      keyframes([
        style({offset: 0.0,color:"white",transform:"translateY(30%)",opacity:0.2 }),
        style({offset: 0.65, color:"white",transform:"translateY(20%)",opacity:0.5}),
        style({offset: 0.80, color:"white",transform:"translateY(10%)",opacity:0.9}),
        style({offset: 0.85, color:"white",transform:"translateY(0%)"}),
        style({offset: 1, color:"black",transform:"translateY(0%)",opacity:1}),
      ])),{params:{duration: "1s",
      overlay:"rgba(0,0,0,0.75)", 
      delay: "400ms", 
      ease: "ease-out"}});

     
  export const sageFull: AnimationTriggerMetadata =
  trigger("sageFull",[

    transition("void=>down",[
      group([
        query(".darken-overlay",[
          style({backgroundColor: overlayColor}),
          useAnimation(sageBlackOverlay,
            {params:{duration:sageDuration,overlay:overlayColor, delay: sageDelay,ease:bezier}})
        ]
        ),

        query(":self",[
            style({transform:"translateY(20%)",opacity:0}),
            animate("400ms 400ms ease-in-out",
                style({
                    transform:"translateY(0%)",
                    opacity:1}))]
        ),
        query(".header",[
          style({transform:"translateY(40%)",opacity:0 }),
          useAnimation(sageEnter,
            {params:{duration:sageDuration,overlay:overlayColor, delay: sageDelay,ease:bezier}})
        ]
        ),
        animateChild() 
      ]) 
    ]),  

    transition("void=>up",[
      group([
        query(".darken-overlay",[
          style({backgroundColor: overlayColor}),
          useAnimation(sageBlackOverlay,
            {params:{duration:sageDuration,overlay:overlayColor, delay: sageDelay,ease:bezier}})
        ]
        ),
        query(":self",[
            style({transform:"translateY(-20%)",opacity:0}),
            animate("400ms 400ms ease-in-out",
                style({transform:"translateY(0%)",opacity:1}))]
        ),
        query(".header",[
          style({transform:"translateY(-40%)",opacity:0 }),
          useAnimation(sageEnter,
            {params:{duration:sageDuration,overlay:overlayColor, delay: sageDelay,ease:bezier}})
        ]
        ),
        animateChild() 
      ]) 
    ]),  

    transition("up=>void",[
      group([
        query(":self",[
          animate("300ms 300ms ease-out",
          style({opacity:0,transform:"translateY(5%)",position:"absolute"}))]
        ),
        
        query(".header",[
          animate("600ms 100ms cubic-bezier(.85,0,.38,.9)", 
              style({transform:"translateY(100%)",opacity:0.5}))]
        ),
        
      ])]),
 
  
    transition("down=>void",[
      group([
        query(":self",[
          animate("300ms 300ms ease-out",
          style({opacity:0,transform:"translateY(-5%)",position:"absolute"}))]
        ),
        
        query(".header",[
          animate("600ms 100ms cubic-bezier(.85,0,.38,.9)", 
              style({transform:"translateY(-100%)",opacity:0.5}))]
        ),
        
      ])]),

    /* transition("void=>down",[
      group([
        query(":self",[
          style({transform:"translateY(-20%)",opacity:0}),
          animate("400ms 400ms ease-in-out",
              style({transform:"translateY(0%)",opacity:1}))]
      ),
      query(".header",[
        style({transform:"translateY(-40%)",opacity:0 }),
        useAnimation(sageEnter,
          {params:{duration:sageDuration,overlay:overlayColor, delay: sageDelay,ease:bezier}})
      ]
      ),
      animateChild()
        
      ])
    ]), */
  ])
    

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

  /* animation(
    animate("{{duration}} 2s {{ease}}",keyframes([
      style({offset:0.2,opacity: 0.6}),
      style({offset:0.5,opacity: 0}),
      style({offset:1,opacity: 1}),
    ])),{params:{duration: "1s", ease: "ease-out"}}
  ) */

  export let bounceOutLeftAnimation = animation(
    animate("{{duration}} 2s {{ease}}",keyframes([
      style({offset:0.2,opacity: 0.6}),
      style({offset:0.5,opacity: 0}),
      style({offset:1,opacity: 1}),
    ])),{params:{duration: "1s", ease: "ease-out"}}
  )

  export const reveal = trigger("reveal", [
    transition(":enter", [
      style({ opacity: 0, transform: "translateY(-10px)" }),
      animate("250ms 100ms", style({ opacity: 1, transform: "translateY(0px)" })),
    ]),
    transition(":leave", [
      style({ opacity: 1, transform: "translateY(0px)" }),
      animate("250ms 100ms", style({ opacity: 0, transform: "translateY(-10px)" })),
    ]),
  ]);








 
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
  
 
