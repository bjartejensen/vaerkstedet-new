import { Component, OnInit } from '@angular/core';
import { loadUnload } from 'src/app/animations';
import { LayoutService } from 'src/app/services/layout.service';
import { SustainService } from '../sustain.service';

@Component({
  selector: 'app-sustain-desktop',
  templateUrl: './sustain-desktop.component.html',
  styleUrls: ['./sustain-desktop.component.scss'],
  animations:[loadUnload]
})
export class SustainDesktopComponent implements OnInit {
  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[];

  constructor(private sustainService:SustainService,public layoutService:LayoutService,) { }

  ngOnInit(): void {

    this.sustainService.setTitleAndMeta();

    this.setHeader();
    this.setContent();
    this.setImages();

  }

  private setImages(){
    this.images = this.sustainService.getImages();
  }

  private setHeader(){
    this.header = this.sustainService.getHeader();
  }

  private setContent(){
    this.contentOne = this.sustainService.getContentOne();
    this.contentTwo = this.sustainService.getContentTwo();
  }

}
