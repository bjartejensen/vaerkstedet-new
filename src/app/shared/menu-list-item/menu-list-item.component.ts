import { Component, OnInit, HostBinding, Input } from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";
import { NavItem,NavSubItem } from "../../models";
import { Router } from "@angular/router";

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
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
 
  @Input() mainItem: NavItem;
  @Input() subItems?:NavSubItem[];

  constructor(public router: Router) {}

  //@HostBinding("attr.aria-expanded") ariaExpanded = this.expanded;

  ngOnInit() {
  }

  public getChildRoute(item:NavSubItem){
    let s:any={};
    s[item.paramName] = item.paramValue;
    return s;
  }

  onItemSelected() {
    if (this.mainItem.children && this.mainItem.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
