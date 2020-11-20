import { Component, OnInit, HostBinding } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { LandingService } from '../landing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations:[]
})
export class LandingComponent implements OnInit {
  
  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;

  images: any[]=[];
  subHeaders:string[]=[];
  urls: string[]=[];
  btnCaptions:string[]=[];

  idx: number=0;
  public state:string ="up";
  public isDown:boolean;

  inFocus:number;
  vec:number[]=[1,1,1,1,1];

  constructor(private landingService:LandingService,
    public layoutService: LayoutService) {
      
      this.images = this.landingService.images;
      this.subHeaders = this.landingService.subHeaders;
      this.urls = this.landingService.urls;
      this.btnCaptions = this.landingService.btnCaptions;
    }

  ngOnInit(): void {   

    
  }

  onClickScroll(elementId:string):void{
    this.layoutService.scrollToSection(elementId);
  }

  onVisible(event){
    this.inFocus= +event.id;
  }

  //#region Private Methods
  
  public get logoUrl(){
    return  this.landingService.logoUrl; //"../../../assets/logo/logo-grey.png";
  }
  

  private onIncreaseIndex(){
    this.idx++;
    if(this.idx>=this.images.length-1){
      this.idx=0;
    } 
  }
  

  //#endregion

  //#region Public Methods

  /* public changeRoute(){
    const url:string ="carousel";
    this.router.navigateByUrl("/" + url);
  } */

 /*  public onDone(event){
    console.log(event);
  } */

  public onScroll(event:string){
    this.onIncreaseIndex();
    this.state = event.toLowerCase();
  }

  public isVisible(idx:number){
    return this.idx ===idx? true: false;
  }
  
  //#endregion

}
