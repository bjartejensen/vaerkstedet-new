import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import { MenuModel, NavItem } from 'src/app/models';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() isMobile:boolean=false;
  @Input() isOpened:boolean;

  @Output() toogleDrawer:EventEmitter<boolean> = new EventEmitter();

  menuItems:MenuModel[];

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems(){
    this.menuItems = this.menuService.getMenuItemModels();
  }

  onMenuItemClicked(toggleDrawer:boolean){
    //debugger;
    this.toogleDrawer.emit(toggleDrawer);
  }



  

}
