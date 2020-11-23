import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { loadUnload } from 'src/app/animations';
import { LayoutService } from 'src/app/services/layout.service';
import { SustainService } from '../sustain.service';



@Component({
  selector: 'app-sustain',
  templateUrl: './sustain.component.html',
  styleUrls: ['./sustain.component.scss'],
  animations:[loadUnload]
})
export class SustainComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[];

  constructor(public layoutService:LayoutService,
         private sustainService:SustainService) { }

  ngOnInit(): void {

    this.layoutService.scrollToSection("top","auto");

    this.sustainService.setTitleAndMeta();

    this.setImages();
    this.setHeader();
    this.setContent();
  }

  private setHeader(){
    this.header = this.sustainService.getHeader();
  }

  private setContent(){
    this.contentOne = this.sustainService.getContentOne();
    this.contentTwo = this.sustainService.getContentTwo();
  }

  private setImages(){
    this.images = this.sustainService.getImages();
  }

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }

}
