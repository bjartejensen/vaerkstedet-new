import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import { NavItem } from 'src/app/models';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() isMobile:boolean=false;
  @Output() toogleDrawer:EventEmitter<boolean> = new EventEmitter();

  navItems:NavItem[];

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems(){
    this.navItems = this.menuService.getMenuItems();
  }

  onMenuItemClicked(toggleDrawer:boolean){
    this.toogleDrawer.emit(toggleDrawer);
  }



  

}
