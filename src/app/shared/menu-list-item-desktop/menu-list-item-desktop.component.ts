import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  query,
  group,
  stagger
} from "@angular/animations";
import { MenuModel } from 'src/app/models';

@Component({
  selector: 'app-menu-list-item-desktop',
  templateUrl: './menu-list-item-desktop.component.html',
  styleUrls: ['./menu-list-item-desktop.component.scss'],
  animations:[
    trigger("subMenuReveal",[
      transition(":enter",[
          query('.item',[
            style({opacity:0,transform:"translateY(-20px)"}),
            stagger(50, animate("100ms 0ms"))
          ])
  ])]),
  trigger("subMenuDefaultReveal",[
    transition(":enter",[
        style({transform:"translateY(-20px)"}),
        animate("300ms 100ms")]     ),
  ])
]
})
export class MenuListItemDesktopComponent implements OnInit {


  @Input() menuItem: MenuModel;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubMenuItemClicked(url){
    this.router.navigateByUrl(url);
  }

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }

}
