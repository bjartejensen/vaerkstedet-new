import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-desktop',
  templateUrl: './find-desktop.component.html',
  styleUrls: ['./find-desktop.component.scss']
})
export class FindDesktopComponent implements OnInit {

  instaUrl = "https://www.instagram.com/louiseroughtjewellery/?hl=da";
  wwwVaerkstedet = "https://vaerk-stedet.dk";
  fbUrl = "https://www.facebook.com/louiseroughtjewellery/";

  constructor() { }

  ngOnInit(): void {
  }

}
