import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { loadUnload } from 'src/app/animations';
import { LayoutService } from 'src/app/services/layout.service';
import { WeddingService } from '../wedding.service';

@Component({
  selector: 'app-wedding-desktop',
  templateUrl: './wedding-desktop.component.html',
  styleUrls: ['./wedding-desktop.component.scss'],
  animations:[loadUnload]
})
export class WeddingDesktopComponent implements OnInit {

/*   isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$; */
  
  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[];

  constructor(private weddingService:WeddingService,public layoutService:LayoutService,) { }

  ngOnInit(): void {

    this.weddingService.setTitleAndMeta();

    this.setHeader();
    this.setContent();
    this.setImages();

  }

  private setImages(){
    this.images = this.weddingService.getImages();
  }

  private setHeader(){
    this.header = this.weddingService.getHeader();
  }

  private setContent(){
    this.contentOne = this.weddingService.getContentOne();
    this.contentTwo = this.weddingService.getContentTwo();
  }
}
