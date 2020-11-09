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
import { reveal } from 'src/app/animations';

@Component({
  selector: "app-menu-list-item",
  templateUrl: "./menu-list-item.component.html",
  styleUrls: ["./menu-list-item.component.scss"],
  animations: [reveal,
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
 
  @Input() menuItem: MenuModel;
  @Output() subMenuItemClickedAndToggleDrawer:EventEmitter<boolean> = new EventEmitter();


  constructor(public router: Router) {}

  //@HostBinding("attr.aria-expanded") ariaExpanded = this.expanded;

  ngOnInit() {
  }


  onMainItemClicked(url:string){

    debugger;

    if(!!url && url!=""){
      this.router.navigateByUrl(url);
      this.subMenuItemClickedAndToggleDrawer.next(true);
    }

  }

  onSubItemClickedOld(url:string){

    debugger;
    //let url = `/${this.menuItem.url}/${subItem.route}`
    this.router.navigate([url])
    this.subMenuItemClickedAndToggleDrawer.next(true);
  }

  public getChildRouteOld(item:NavSubItem){
    let s:any={};
    s[item.paramName] = item.paramValue;
    return s;
  }

  onItemSelected() {
    if (this.menuItem.subMenuItems) {
      this.expanded = !this.expanded;
    }
  }
}
