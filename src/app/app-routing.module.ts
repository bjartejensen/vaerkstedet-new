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
    path: "home",
    loadChildren: () =>
      import("./landing/landing.module").then((m) => m.LandingModule),
    data: { animationState: 'One' }
  },
  /* {
    path: "carousel",
    loadChildren: () =>
      import("./carousel/carousel.module").then((m) => m.CarouselModule),
      data: { animationState: 'Two' }
  }, */
  {
    path:"about",
    loadChildren: ()=>
      import("./about/about.module").then((m)=>m.AboutModule),
      data: { animationState: 'Two' }
  },
  {
    path:"collections",
    loadChildren:()=>import("./collections/collections.module")
      .then((m)=>m.CollectionsModule),
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
    path:"news",
    loadChildren: ()=>
      import("./news/news.module").then((m)=>m.NewsModule),
      data: { animationState: 'Two' },
  }
  ,{
    path:"wedding",
    loadChildren:()=>import("./wedding/wedding.module").then((m)=>m.WeddingModule),
    data: { animationState: 'Two' },
  },
  {
    path:"custommade",
    loadChildren:()=>import("./custommade/custommade.module").then((m)=>m.CustommadeModule),
    data: { animationState: 'Two' },
  },
  {
    path:"find",
    loadChildren: ()=> import("./find/find.module").then((m)=>m.FindModule),
      data:{animationState: 'One'}
  },
  {
    path:"contact",
    loadChildren: ()=> import("./contact/contact.module").then((m)=>m.ContactModule),
      data:{animationState: 'One'}
  },
  {
    path:"newsletter",
    loadChildren:()=>import("./newsletter/newsletter.module").then((m)=>m.NewsletterModule),
    data:{animationState: 'One'}
  },
  {
    path:"**",
    loadChildren: () => import("./landing/landing.module").then((m) => m.LandingModule), 
    data: { animationState: 'One' }
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DesignersResolver]
})
export class AppRoutingModule { }
