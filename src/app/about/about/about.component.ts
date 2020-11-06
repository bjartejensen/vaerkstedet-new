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
  content:string[]=[];

  constructor(private layoutService:LayoutService,
    private aboutService:AboutService) {}

  ngOnInit(): void {

    this.setHeader();
    this.setContent();
    
  }

  private setHeader(){
    this.header = this.aboutService.getHeader();
  }
  
  private setContent(){
    this.content = this.aboutService.getContent();
  }

}
