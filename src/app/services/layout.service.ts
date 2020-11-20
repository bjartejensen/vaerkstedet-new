import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { combineLatest, merge, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public isMobile$:Observable<boolean>;
  public isLargeMobile$:Observable<boolean>;
  public isDesktop$:Observable<boolean>

  private widthThreshold:string="1025px"
 
  constructor(breakpointObserver: BreakpointObserver) {
    
      const addedDeskTop$ = breakpointObserver.observe([`(min-width: ${this.widthThreshold})`])

      this.isDesktop$ = combineLatest([addedDeskTop$])
        .pipe(map(([ad])=>{
          return (ad.matches)
        })).pipe(shareReplay());
      
      this.isMobile$ = breakpointObserver.observe([Breakpoints.Handset,Breakpoints.TabletPortrait])
        .pipe(map(matches=> matches.matches)).pipe(shareReplay());


      this.isLargeMobile$ = breakpointObserver.observe([Breakpoints.TabletPortrait, Breakpoints.HandsetLandscape])
        .pipe(map(matches=> matches.matches)).pipe(shareReplay());

     }

  public scrollToSection(sectionId: string, scrollBehavior: ScrollBehavior = "smooth" ) {
      const elements = document.getElementById(sectionId);
  
      if (!(elements === undefined || elements === null)) {
        elements.scrollIntoView({ behavior: scrollBehavior });
      }
  }

  


  
}
