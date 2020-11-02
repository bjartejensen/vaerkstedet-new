import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignersResolver } from './services/designers.resolver';

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
  },
  {
    path: "designers",
    loadChildren: () =>
      import("./designers/designers.module").then((m) => m.DesignersModule),
        data: { animationState: 'Three' },
    resolve: {
      designers:DesignersResolver
    }
  },
  {
    path:"find",
    loadChildren: ()=> import("./find/find.module").then((m)=>m.FindModule),
      data:{animationState: 'One'}
  }
 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DesignersResolver]
})
export class AppRoutingModule { }
