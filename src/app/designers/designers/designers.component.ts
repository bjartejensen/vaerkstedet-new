import { Component, OnChanges, OnInit } from '@angular/core';
import { SingleDesigner } from 'src/app/models';
import { DesignersService } from '../designers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { map, tap,filter, startWith } from 'rxjs/operators';
import { LayoutService } from 'src/app/services/layout.service';
import { loadUnload } from 'src/app/animations';

@Component({
  selector: 'app-designers',
  templateUrl: './designers.component.html',
  styleUrls: ['./designers.component.scss'],
  animations:[loadUnload]
})
export class DesignersComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  content:string[] =[];
  contentOne:string[]=[];
  contentTwo:string[]=[];
  images:string[]=[]; 

  constructor(private designersService: DesignersService,
    public layoutService:LayoutService) { }
  
  ngOnInit(): void {

    this.layoutService.scrollToSection("top","auto");

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

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }


}
