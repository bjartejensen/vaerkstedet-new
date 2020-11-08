import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from 'src/app/models';

@Component({
  selector: 'app-menu-list-item-desktop',
  templateUrl: './menu-list-item-desktop.component.html',
  styleUrls: ['./menu-list-item-desktop.component.scss']
})
export class MenuListItemDesktopComponent implements OnInit {


  @Input() menuItem: MenuModel;

  constructor(private router:Router) { }

  ngOnInit(): void {

    //debugger;

  }

  onSubMenuItemClicked(url){
    this.router.navigateByUrl(url);
  }

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }

}
