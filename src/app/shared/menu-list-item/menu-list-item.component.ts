import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";
import { MenuModel, NavItem,NavSubItem } from "../../models";
import { Router } from "@angular/router";
//import { reveal } from 'src/app/animations';

@Component({
  selector: "app-menu-list-item",
  templateUrl: "./menu-list-item.component.html",
  styleUrls: ["./menu-list-item.component.scss"],
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
      transition("void=>*",animate(200)),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
 
  @Input() menuItem: MenuModel;

  constructor(public router: Router) {}

  ngOnInit() {}

  onItemSelected() {
    if (this.menuItem.subMenuItems) {
      this.expanded = !this.expanded;
    }
  }
}
