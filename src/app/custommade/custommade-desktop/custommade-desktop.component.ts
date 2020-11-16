import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { CustommadeService } from '../custommade.service';

@Component({
  selector: 'app-custommade-desktop',
  templateUrl: './custommade-desktop.component.html',
  styleUrls: ['./custommade-desktop.component.scss']
})
export class CustommadeDesktopComponent implements OnInit {
  
  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[];

  constructor(private customService:CustommadeService) { }

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
