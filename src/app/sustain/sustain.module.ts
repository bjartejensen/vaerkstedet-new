import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SustainRoutingModule } from './sustain-routing.module';
import { SustainComponent } from './sustain/sustain.component';
import { SustainDesktopComponent } from './sustain-desktop/sustain-desktop.component';


@NgModule({
  declarations: [SustainComponent, SustainDesktopComponent],
  imports: [
    CommonModule,
    SustainRoutingModule
  ]
})
export class SustainModule { }
