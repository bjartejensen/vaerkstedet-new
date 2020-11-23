import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable, of, from } from "rxjs";
import { map, shareReplay, filter, tap } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from 'src/app/services/layout.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [
    trigger("InAndOut",[
      state('in', style({ opacity:1 })),
      transition('* => in', [
          style({opacity:0}),
                animate("100ms 200ms")
      ]),
/*       transition('*=>out', [
        animate("600ms 1000ms", style({ opacity:0 }))
      ]) */
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
  appDrawer: MatSidenav;

  shouldRun:boolean= true;

  instaUrl = "https://www.instagram.com/louiseroughtjewellery/?hl=da";
  wwwVaerkstedet = "https://vaerk-stedet.dk";
  fbUrl = "https://www.facebook.com/louiseroughtjewellery/";

  constructor(private menuService:MenuService,
      private layoutService: LayoutService) {}

  ngOnInit(): void {

    this.isMobile$.subscribe(x=>{
      //debugger
      //console.log("Mobile");
      this.isMobile = x;
    })  

    this.menuService.shouldToggleObs$.subscribe(shouldToggle=>{
      this.onToggleDrawer(shouldToggle);
    })
  
  }

  onTest(event){
  }

  onToggleDrawer(shouldToggle:boolean){
    if(shouldToggle){
      this.appDrawer.toggle();
    }
    
  }

  onClosedStart(event){
    this.isDrawerOpen = false;
  }
  
  onOpenedStart(event){
    this.isDrawerOpen = true;
  }

  public get w(){
      return !this.isMobile?"100vw":"90%";
  }

  //[ngStyle]="{'width': caroW, 'height': caroH}"

}
