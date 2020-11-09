import { query, stagger, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { reveal } from 'src/app/animations';

import {
  state,
  transition,
  style,
  animate
} from "@angular/animations";

import { MenuModel, NavItem } from 'src/app/models';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list-desktop',
  templateUrl: './menu-list-desktop.component.html',
  styleUrls: ['./menu-list-desktop.component.scss'],
  animations: [reveal,
    trigger("indicatorRotate", [
      state("collapsed", style({ transform: "rotate(0deg)" })),
      state("expanded", style({ transform: "rotate(180deg)" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")
      )
    ]),
    trigger("InAndOut",[
      state('void',style({ opacity: 0,background:'orange' })),
      transition('void => opened', [

        query("h1",[style({opacity: 1,background:'orange'}),
        animate("400ms 1300ms")
        ])
      ]),
     
    ])
  ]
})
export class MenuListDesktopComponent implements OnInit, OnChanges {

  @Input() isOpened:boolean;
  expanded: boolean;

  secondaryMenuSubject: BehaviorSubject<MenuModel> = new BehaviorSubject(null);
  secondaryMenuContext$:Observable<MenuModel>
    = this.secondaryMenuSubject.asObservable();

  menuItems:MenuModel[];
 
  constructor(private menuService:MenuService) {
    
    this.secondaryMenuContext$
      .subscribe(x=>console.log("obs$ emitted ",x ))
  }

  ngOnInit(): void {
    this.setMenuItems();
  }

  ngOnChanges(){
    console.log("Opened State?: " , this.isOpened);
  }

  setMenuItems(){
    this.menuItems = this.menuService.getMenuItemModels();
  }

  public onMouseoverPrimaryItem(item:MenuModel){
    console.log(item);
     this.secondaryMenuSubject.next(item);
     this.expanded = true;
  }

}
