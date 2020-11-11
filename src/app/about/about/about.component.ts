import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;

  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];
  contentThree:string[]=[];

  images:string[]=[];

  constructor(private layoutService:LayoutService,
    private aboutService:AboutService) {}

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
