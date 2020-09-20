import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselButtonDirective } from './directives/carousel-button.directive';
import { CarouselDirective } from './directives/carousel.directive';


@NgModule({
  declarations: [CarouselComponent, CarouselButtonDirective, CarouselDirective],
  imports: [
    CommonModule,
    CarouselRoutingModule
  ]
})
export class CarouselModule { }
