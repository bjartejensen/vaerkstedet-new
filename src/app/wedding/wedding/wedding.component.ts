import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { WeddingService } from '../wedding.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit {

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  contentOne:string[]=[];
  contentTwo:string[]=[];

  constructor(private layoutService:LayoutService,
    private weddingService:WeddingService) { }

  ngOnInit(): void {
    this.setHeader();
    this.setContent();
  }

  private setHeader(){
    this.header = this.weddingService.getHeader();
  }

  private setContent(){
    this.contentOne = this.weddingService.getContentOne();
    this.contentTwo = this.weddingService.getContentTwo();
  }

}