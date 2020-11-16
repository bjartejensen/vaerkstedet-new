import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-landing-desktop',
  templateUrl: './landing-desktop.component.html',
  styleUrls: ['./landing-desktop.component.scss']
})
export class LandingDesktopComponent implements OnInit {

  constructor(private landingService:LandingService) { }

  ngOnInit(): void {
  }

  public get logoUrl(){
    return  this.landingService.logoUrl; //"../../../assets/logo/logo-grey.png";
  }

}
