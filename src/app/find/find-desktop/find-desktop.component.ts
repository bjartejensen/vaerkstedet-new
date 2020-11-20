import { Component, OnInit } from '@angular/core';
import { loadUnload } from 'src/app/animations';
import { FindService } from '../find.service';

@Component({
  selector: 'app-find-desktop',
  templateUrl: './find-desktop.component.html',
  styleUrls: ['./find-desktop.component.scss'],
  animations: [loadUnload]
})
export class FindDesktopComponent implements OnInit {

  instaUrl = "https://www.instagram.com/louiseroughtjewellery/?hl=da";
  wwwVaerkstedet = "https://vaerk-stedet.dk";
  fbUrl = "https://www.facebook.com/louiseroughtjewellery/";
  
  content:string;
  header:string;
  subHeader:string;

  constructor(private findService:FindService) { }

  ngOnInit(): void {
    this.content = this.findService.getContent();
    this.header = this.findService.getHeader();
  }

}
