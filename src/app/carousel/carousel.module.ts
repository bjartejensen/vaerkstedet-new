import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselDirective } from './directives/carousel.directive';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

const modules = [
  CommonModule,
    CarouselRoutingModule,
    MatButtonModule,
    MatIconModule
];

@NgModule({
  declarations: [CarouselComponent, CarouselDirective],
  imports: [
   modules
  ],
  exports: [modules,CarouselComponent,CarouselDirective]
})
export class CarouselModule { }
