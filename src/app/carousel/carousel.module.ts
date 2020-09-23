import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselButtonDirective } from './directives/carousel-button.directive';
import { CarouselDirective } from './directives/carousel.directive';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [CarouselComponent, CarouselButtonDirective, CarouselDirective],
  imports: [
    CommonModule,
    CarouselRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CarouselModule { }
