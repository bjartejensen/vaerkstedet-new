import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SageDirective } from './sage.directive';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LandingDesktopComponent } from './landing-desktop/landing-desktop.component';
import { MagazineComponent } from './magazine/magazine.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LandingComponent, SageDirective, LandingDesktopComponent, MagazineComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ScrollingModule,
    MatButtonModule
  ]
})
export class LandingModule { }
