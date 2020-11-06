import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { AboutDesktopComponent } from './about-desktop/about-desktop.component';


@NgModule({
  declarations: [AboutComponent, AboutDesktopComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
