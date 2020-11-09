import { EventEmitter, Output } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[sidenavAs]',
  exportAs: 'sidenav'
})
export class SidenavDirective {

  @Output() anyMenuItemClickedAndToggleDrawer:EventEmitter<boolean> = new EventEmitter();
  @Output() toggleDrawer: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public onAnyItemClicked(url?:string){

    debugger;
    if(url){
      if(url!=null){
        this.anyMenuItemClickedAndToggleDrawer.emit(true);
        console.log("Value emitted and route is ", url );
      }
    }
  }

}
