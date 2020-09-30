import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { SingleDesigner } from 'src/app/models';
import { DesignersService } from '../../services/designers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap,filter } from 'rxjs/operators';


@Component({
  selector: 'app-designers',
  templateUrl: './designers.component.html',
  styleUrls: ['./designers.component.scss']
})
export class DesignersComponent implements OnInit {

  screenState: BreakpointState;

  designers: SingleDesigner[];
  singleDesignerObs$: Observable<SingleDesigner>;

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

    this.singleDesignerObs$ = this.designersService.singleDesignerObs$;

   /*  this.route.params.subscribe(x=>{

      if(x.name!="" && x.name!=undefined){
        this.getSingleDesigner(x.name)
      }
      else{
        this.singleDesignerObs$ = null;
        this.singleDesignerObs$ = this.designersService.singleDesignerObs$;
      }
      
    }) */
    
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
