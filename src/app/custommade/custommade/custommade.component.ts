import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { CustommadeService } from '../custommade.service';

@Component({
  selector: 'app-custommade',
  templateUrl: './custommade.component.html',
  styleUrls: ['./custommade.component.scss']
})
export class CustommadeComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[];

  constructor(private layoutService:LayoutService,
      private customService:CustommadeService) { }

  ngOnInit(): void {

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

}
