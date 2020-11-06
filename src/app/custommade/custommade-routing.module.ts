import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustommadeComponent } from './custommade/custommade.component';

const routes: Routes = [{
  path:"",
  component:CustommadeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustommadeRoutingModule { }
