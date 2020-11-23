import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SustainComponent } from './sustain/sustain.component';

const routes: Routes = [

  {path:"",
    component: SustainComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SustainRoutingModule { }
