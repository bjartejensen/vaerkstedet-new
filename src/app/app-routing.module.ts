import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./landing/landing.module").then((m) => m.LandingModule),
    data: { animationState: 'One' }
  },
  {
    path: "carousel",
    loadChildren: () =>
      import("./carousel/carousel.module").then((m) => m.CarouselModule),
    data: { animationState: 'Two' }
  }
 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
