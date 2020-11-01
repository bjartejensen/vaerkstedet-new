import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignersComponent } from './designers/designers.component';
import { SingleDesignerComponent } from './single-designer/single-designer.component';
import { SingleDesignerResolver } from '../services/designers.resolver';

const routes: Routes = [
  {
    path: "",
    component: DesignersComponent,
  },
  {
    path: ":designerUrl",
    component: SingleDesignerComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SingleDesignerResolver]
})

export class DesignersRoutingModule { }
