import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable, of, from } from "rxjs";
import { map, shareReplay, filter, tap } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from 'src/app/services/layout.service';
import { show } from 'src/app/animations';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [show,
    trigger("InAndOut",[
       
      state('in', style({ opacity:1 })),
      transition('* => in', [
                animate("100ms 300ms")
      ]),
      state('out', style({ opacity:0 })),
      transition('*=>out', [
        animate("50ms 0ms")
      ])
    ])

  ]
})
export class ShellComponent implements OnInit {

  webSizes = [
    Breakpoints.Web,
    Breakpoints.WebLandscape,
    Breakpoints.WebPortrait,
  ];

  isDrawerOpen:boolean;

  isMobile: boolean = true;

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  //isLargeMobile$:Observable<boolean> = this.layoutService.isLargeMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;

  @ViewChild("drawer")
  appDrawer: ElementRef;

  shouldRun:boolean= true;

  instaUrl = "https://www.instagram.com/louiseroughtjewellery/?hl=da";
  wwwVaerkstedet = "https://vaerk-stedet.dk";
  fbUrl = "https://www.facebook.com/louiseroughtjewellery/";

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {

    this.isMobile$.subscribe(x=>{
      //debugger
      console.log("Mobile");
      this.isMobile = x;
    })  

  /*   this.isLargeMobile$.subscribe(x=>{
      //debugger;
      console.log("Large Mobile");
    }) */

    /* this.isDesktop$.subscribe(x=>{
      //debugger;
      console.log("Desktop");
    }) */

  }

  onTest(event){
    console.log("Der er faktisk et hit på shell", event )
  }

  onToggleDrawer(shouldToggle:boolean){

    debugger;
    
    if(shouldToggle){
      this.appDrawer.nativeElement.toggle();
    }
    
  }

  onClosedStart(event){
    console.log("closing");
    this.isDrawerOpen = false;
  }
  
  onOpenedStart(event){
    console.log("opening");
    this.isDrawerOpen = true;
  }

  public get w(){
      return !this.isMobile?"100vw":"90%";
  }

  //[ngStyle]="{'width': caroW, 'height': caroH}"

}
