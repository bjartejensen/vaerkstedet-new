import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { loadUnload } from 'src/app/animations';
import { LayoutService } from 'src/app/services/layout.service';
import { WeddingService } from '../wedding.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss'],
  animations:[loadUnload]
})
export class WeddingComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[];

  constructor(public layoutService:LayoutService,
         private weddingService:WeddingService) { }

  ngOnInit(): void {
    
    this.layoutService.scrollToSection("top","auto");

    this.weddingService.setTitleAndMeta();

    this.setImages();
    this.setHeader();
    this.setContent();
  }

  private setHeader(){
    this.header = this.weddingService.getHeader();
  }

  private setContent(){
    this.contentOne = this.weddingService.getContentOne();
    this.contentTwo = this.weddingService.getContentTwo();
  }

  private setImages(){
    this.images = this.weddingService.getImages();
  }

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }

}
