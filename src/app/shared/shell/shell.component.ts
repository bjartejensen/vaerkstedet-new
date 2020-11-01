import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable, of, from } from "rxjs";
import { map, shareReplay, filter, tap } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  webSizes = [
    Breakpoints.Web,
    Breakpoints.WebLandscape,
    Breakpoints.WebPortrait,
  ];

  isMobile: boolean = true;

  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe(this.webSizes)
    .pipe(
      tap(result=> this.isMobile=(!result)),
      map((result) => !result.matches),
      shareReplay()
    );
  isDesktop$: Observable<boolean> = this.breakpointObserver
    .observe(this.webSizes)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  @ViewChild("drawer")
  appDrawer: ElementRef;

  shouldRun:boolean= true;

  instaUrl = "https://www.instagram.com/louiseroughtjewellery/?hl=da";
  wwwVaerkstedet = "https://vaerk-stedet.dk";
  fbUrl = "https://www.facebook.com/louiseroughtjewellery/";

  constructor(private breakpointObserver: BreakpointObserver,
    private route: Router) { }

  ngOnInit(): void {

    this.isMobile$.subscribe(x=>{
      this.isMobile = x;
    })  

  }

  onToggleDrawer(shouldToggle:boolean){

    debugger;
    
    if(shouldToggle){
      this.appDrawer.nativeElement.toggle();
    }
    
  }

  public get w(){
      return !this.isMobile?"100vw":"80%";
  }

  //[ngStyle]="{'width': caroW, 'height': caroH}"

}
