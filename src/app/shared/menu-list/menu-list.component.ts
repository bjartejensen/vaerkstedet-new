import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import { NavItem } from 'src/app/models';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() isMobile:boolean=false;
  @Output() toogleDrawer:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  navItems: NavItem[];

  ngOnInit(): void {
    this.setMenuItems();
  }

  onMenuItemClicked(toggleDrawer:boolean){
    debugger;
    this.toogleDrawer.emit(toggleDrawer);
  }

  setMenuItems() {

    this.navItems = [
      {
        displayName: "Designers",
        subHeader: "About",
        route:"designers",
        toogleDrawer:false,
        iconName: "",
        children: [
          {
            displayName: "Louise Rought",
            route:"louise_rought",
            paramName:"name",
            paramValue:"louise_rought",
          },
          {
            displayName: "Alice Kaufmann",
            route:"alice_kaufmann",
            paramName:"name",
            paramValue:"alice_kaufmann",
          },
       
        ],
      }
    ];
  }

}
