import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { loadUnload } from 'src/app/animations';
import { LayoutService } from 'src/app/services/layout.service';
import { FindService } from '../find.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
  animations: [loadUnload]
})
export class FindComponent implements OnInit {

  instaUrl = "https://www.instagram.com/vaerkstedet2200/";
  wwwVaerkstedet = "https://vaerk-stedet.dk";
  fbUrl = "https://www.facebook.com/Vaerkstedet2200";
  

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;

  content:string;
  header:string;
  subHeader:string;

  constructor(private findService:FindService,
            private layoutService:LayoutService) {
  }

  ngOnInit(): void {

    this.layoutService.scrollToSection("top","auto");

    this.findService.setTitleAndMeta();
    
    this.content = this.findService.getContent();
    this.header = this.findService.getHeader();
    this.subHeader = this.findService.getSubHeader();

  }

}
