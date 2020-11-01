import { Component, OnChanges, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { SingleDesigner } from 'src/app/models';
import { DesignersService } from '../../services/designers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map, tap,filter, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-designers',
  templateUrl: './designers.component.html',
  styleUrls: ['./designers.component.scss']
})
export class DesignersComponent implements OnInit {

  screenState: BreakpointState;

  designers: SingleDesigner[];
  singleDesignerObs$: Observable<SingleDesigner>; //Observable<SingleDesigner>;
  selectedDesignerObs$: Observable<object>; //Observable<SingleDesigner>;
  singleDesigner: SingleDesigner;

  constructor(private designersService: DesignersService,
    private route: ActivatedRoute,
    breakpointObserver: BreakpointObserver) { 

      breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      //debugger;
      if (result.matches) {
        console.log("break",result);
      }
    });

  }
  
  ngOnInit(): void {
    
    this.setObservableInit();
    this.handleRouteInit();
  }

  private setObservableInit(){

    this.singleDesignerObs$ = this.designersService.singleDesignerObs$;//.pipe(startWith(null));
    this.selectedDesignerObs$ = combineLatest([this.singleDesignerObs$])
      .pipe(map(s=> {
        return {singleDesigner: s[0]}
      }))
  }

  private handleRouteInit(){
    this.route.queryParams.subscribe(x=>{
      if(x.designer!="" && x.designer!=undefined){
        this.designersService.fetchSingleDesigner(x.designer);
      }
    }) 
  }

  public getSingleDesigner(name:string){
    this.designersService.fetchSingleDesigner(name);
  }

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }

  public get introText ():string[]{

    let introTextArr:string[]=[];
    introTextArr.push("Vaerkstedet formidler en række dygtige, danske smykkedesigneres arbejde i butikken i Ryesgade.");
    introTextArr.push("Trods forskellighed i det designmæssige udtryk er der to ting der er fælles for dem alle - deres fokus på det håndlavede og på bæredygtighed.");
    introTextArr.push("Klik ind på de enkelte designere i menuen ovenfor for at læse mere om deres arbejde og se seneste kollektioner.");

    console.log("Intro text",introTextArr);

    return introTextArr;

  }

  

}
