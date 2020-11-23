import { Component, OnInit } from '@angular/core';
import { loadUnload } from 'src/app/animations';
import { DesignersService } from '../designers.service';

@Component({
  selector: 'app-designers-desktop',
  templateUrl: './designers-desktop.component.html',
  styleUrls: ['./designers-desktop.component.scss'],
  animations: [loadUnload]
})
export class DesignersDesktopComponent implements OnInit {

  header:string;
  content:string[] =[];
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[]; 

  constructor(private designersService: DesignersService) { }
  
  ngOnInit(): void {

    this.designersService.setTitleAndMeta();

    this.setImages();
    this.setHeader();
    this.setContentOne();
    this.setContenTwo();
  }


  private setImages(){
    this.images = this.designersService.getImages();
  }

  private setHeader(){
    this.header = this.designersService.getHeader();
  }

  private setContentOne(){
    this.contentOne = this.designersService.getContentOne();
  }

  private setContenTwo(){
    this.contentTwo = this.designersService.getContentTwo();
  }


}
