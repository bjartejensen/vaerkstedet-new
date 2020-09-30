import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable, of, from } from "rxjs";
import { map, shareReplay, filter } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";

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

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(this.webSizes)
    .pipe(
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

    this.isHandset$.subscribe(x=>{
      console.log(x);
    })  

  }

}
