import { query, stagger, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
  animations: [
    trigger("indicatorRotate", [
      state("collapsed", style({ transform: "rotate(0deg)" })),
      state("expanded", style({ transform: "rotate(180deg)" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")
      )
    ]),
    trigger("subMenuReveal",[
      transition(":enter",[
        style({transform:"translateY(-20px)"}),
        animate(200)]       
    ),
    transition("*=>change",animate(200, style({background:"orange"}) )),
    transition(":leave",[
      animate(200,style({transform:"translateY(-20px)"}))]       
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

  secondaryTemplateChanged:boolean;

  secondaryMenuSubject: BehaviorSubject<MenuModel> = new BehaviorSubject(null);
  secondaryMenuContext$:Observable<MenuModel>
    = this.secondaryMenuSubject.asObservable();

  menuItems:MenuModel[];
 
  constructor(private menuService:MenuService) {
  }

  ngOnInit(): void {
    this.setMenuItems();
    this.onMouseoverPrimaryItem(null);
  }

  ngOnChanges(){
  }

  onTemplateChanged(event){
    //debugger;
    this.secondaryTemplateChanged = true;
  }

  setMenuItems(){
    this.menuItems = this.menuService.getMenuItemModels();
  }

  public onMouseoverPrimaryItem(item:MenuModel | null){
     this.secondaryMenuSubject.next(item);
     this.expanded = true;
  }

}
