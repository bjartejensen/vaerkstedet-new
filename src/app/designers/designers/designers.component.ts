import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { SingleDesigner } from 'src/app/models';
import { DesignersService } from '../../services/designers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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

  t = "../../../assets/logo/logo-grey.png";

  ngOnInit(): void {

    this.designers= this.route.snapshot.data["designers"];
    this.singleDesignerObs$ = this.designersService.singleDesignerObs$;

    this.singleDesignerObs$.subscribe(x=>{
      debugger;
    })

   /*  debugger;
    this.designersService.getDesigners()
      .subscribe(d=>{
        debugger;
      }) */

  }

  public getSingleDesigner(name:string){

    debugger;

    this.designersService.fetchSingleDesigner("Alice Kaufmann");

  }

  /* public get selectedDesigner():SingleDesigner{
    return {name: "Louise Rought",profileImage: "",portfolioImages:[],description:[],socialMediaLinks:[]};

  } */

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
