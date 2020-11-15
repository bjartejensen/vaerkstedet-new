import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { WeddingService } from '../wedding.service';

@Component({
  selector: 'app-wedding-desktop',
  templateUrl: './wedding-desktop.component.html',
  styleUrls: ['./wedding-desktop.component.scss']
})
export class WeddingDesktopComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[];

  constructor(private layoutService:LayoutService,
    private weddingService:WeddingService) { }

  ngOnInit(): void {
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
