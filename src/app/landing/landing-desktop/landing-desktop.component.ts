import { Component, OnInit, HostBinding } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { LandingService } from '../landing.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-landing-desktop',
  templateUrl: './landing-desktop.component.html',
  styleUrls: ['./landing-desktop.component.scss']
})
export class LandingDesktopComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;

  images: any[]=[];
  subHeaders:string[]=[];
  urls: string[]=[];
  btnCaptions:string[]=[];

  idx: number=0;

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

  onVisible(event){
    this.inFocus= +event.id;
  }

  public get logoUrl(){
    return  this.landingService.logoUrl; 
  }

}
