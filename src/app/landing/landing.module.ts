import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SageDirective } from './sage.directive';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [LandingComponent, SageDirective],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ScrollingModule
  ]
})
export class LandingModule { }
