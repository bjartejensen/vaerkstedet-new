import { EventEmitter, Output } from '@angular/core';
import { Directive } from '@angular/core';
import { MenuService } from '../menu.service';

@Directive({
  selector: '[sidenav]',
  exportAs: 'sidenav'
})
export class SidenavDirective {

  @Output() toggleDrawer: EventEmitter<boolean> = new EventEmitter();

  constructor(private menuService: MenuService) { }

  public onItemClicked(clickable:boolean){
      if(clickable){
        this.menuService.onItemClicked(clickable);
      }
  }

}
