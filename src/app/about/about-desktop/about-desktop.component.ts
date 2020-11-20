import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { loadUnload } from 'src/app/animations';
import { LayoutService } from 'src/app/services/layout.service';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about-desktop',
  templateUrl: './about-desktop.component.html',
  styleUrls: ['./about-desktop.component.scss'],
  animations: [loadUnload]
})
export class AboutDesktopComponent implements OnInit {

  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  contentThree:string[]=[];

  images:string[]=[];

  constructor(private aboutService:AboutService) {}

  ngOnInit(): void {

    this.setImages();
    this.setHeader();
    this.setContent();
  }

  private setHeader(){
    this.header = this.aboutService.getHeader();
  }
  
  private setContent(){
    this.contentOne = this.aboutService.getContentOne();
    this.contentTwo = this.aboutService.getContentTwo();
    this.contentThree = this.aboutService.getContentThree();
  }

  private setImages(){
    this.images = this.aboutService.getImages();
  }
}
