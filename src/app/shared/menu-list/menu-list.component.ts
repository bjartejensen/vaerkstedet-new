import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import { NavItem } from 'src/app/models';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  constructor() { }

  navItems: NavItem[];

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems() {

    this.navItems = [
      {
        displayName: "Designers",
        subHeader: "About",
        route:"designers",
        iconName: "",
        children: [
          {
            displayName: "Louise Rought",
            route:"designers",
            paramName:"name",
            paramValue:"louise_rought",
          },
          {
            displayName: "Alice Kaufmann",
            route:"designers",
            paramName:"name",
            paramValue:"alice_kaufmann",
          },
       
        ],
      }
    ];
  }

}
