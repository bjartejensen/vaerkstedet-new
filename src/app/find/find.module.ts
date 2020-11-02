import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindRoutingModule } from './find-routing.module';
import { FindComponent } from './find/find.component';
import { SharedModule } from '../shared/shared.module';
import { FindDesktopComponent } from './find-desktop/find-desktop.component';


@NgModule({
  declarations: [FindComponent, FindDesktopComponent],
  imports: [
    CommonModule,
    FindRoutingModule,
    SharedModule
  ]
})
export class FindModule { }
