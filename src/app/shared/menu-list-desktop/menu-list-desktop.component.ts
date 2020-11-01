import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list-desktop',
  templateUrl: './menu-list-desktop.component.html',
  styleUrls: ['./menu-list-desktop.component.scss']
})
export class MenuListDesktopComponent implements OnInit {

  navItems:NavItem[];

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems(){
    this.navItems = this.menuService.getMenuItems();
  }

}
