import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignersComponent } from './designers/designers.component';
import { SingleDesignerComponent } from './single-designer/single-designer.component';
import { SingleDesignerResolver } from './designers.resolver';

const routes: Routes = [
  {
    path: "",
    component: DesignersComponent,
  },
  {
    path: ":name",
    component: SingleDesignerComponent,
    resolve:{
      singleDesigner: SingleDesignerResolver
    }
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SingleDesignerResolver]
})

export class DesignersRoutingModule { }
