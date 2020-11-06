import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingRoutingModule } from './wedding-routing.module';
import { WeddingComponent } from './wedding/wedding.component';
import { WeddingDesktopComponent } from './wedding-desktop/wedding-desktop.component';


@NgModule({
  declarations: [WeddingComponent, WeddingDesktopComponent],
  imports: [
    CommonModule,
    WeddingRoutingModule
  ]
})
export class WeddingModule { }
