import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignersComponent } from './designers/designers.component';

const routes: Routes = [
  {
    path: "",
    component: DesignersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignersRoutingModule { }
