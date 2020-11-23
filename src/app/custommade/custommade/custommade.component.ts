import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { loadUnload } from 'src/app/animations';
import { LayoutService } from 'src/app/services/layout.service';
import { CustommadeService } from '../custommade.service';

export const trns:string = "cubic-bezier(.02,.95,.05,.99)";

@Component({
  selector: 'app-custommade',
  templateUrl: './custommade.component.html',
  styleUrls: ['./custommade.component.scss'],
  animations: [loadUnload]
  
})
export class CustommadeComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  state:string;

  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[];

  constructor(public layoutService:LayoutService,
      private customService:CustommadeService) { }

  ngOnInit(): void {

    this.layoutService.scrollToSection("top","auto");

    this.customService.setTitleAndMeta();

    this.setImages();
    this.setHeader();
    this.setContentOne();
    this.setContentTwo();

  }


  private setHeader(){
    this.header = this.customService.getHeader();
  }

  private setContentOne(){
    this.contentOne = this.customService.getContentOne();
  }

  private setContentTwo(){
    this.contentTwo = this.customService.getContentTwo();
  }

  private setImages(){
    this.images = this.customService.getImages();
  }

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }

}
