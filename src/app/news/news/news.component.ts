import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  instaPosts$:Observable<any>;

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;

  header:string;
  content:string[]=[];

  constructor(private layoutService:LayoutService,
    private newsService:NewsService) {}

  ngOnInit(): void {


    this.setHeader();
    this.setContent();

    this.instaPosts$ = this.newsService.instaPostObs$;
    
    this.newsService.fetchInsta();
  }

  private setHeader(){
    this.header = this.newsService.getHeader();
  }
  
  private setContent(){
    this.content = this.newsService.getContent();
  }

}
