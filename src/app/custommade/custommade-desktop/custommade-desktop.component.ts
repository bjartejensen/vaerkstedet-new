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

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  content:string[]=[];

  constructor(private layoutService:LayoutService,
      private customService:CustommadeService) { }

  ngOnInit(): void {

    this.setHeader();
    //this.setContent();

  }

  private setHeader(){
    this.header = this.customService.getHeader();
  }

  private setContent(){
    //this.content = this.customService.getContent();
  }

}
