import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustommadeRoutingModule } from './custommade-routing.module';
import { CustommadeComponent } from './custommade/custommade.component';
import { CustommadeDesktopComponent } from './custommade-desktop/custommade-desktop.component';


@NgModule({
  declarations: [CustommadeComponent, CustommadeDesktopComponent],
  imports: [
    CommonModule,
    CustommadeRoutingModule
  ]
})
export class CustommadeModule { }
