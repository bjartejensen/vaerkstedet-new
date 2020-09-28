import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignersRoutingModule } from './designers-routing.module';
import { SingleDesignerComponent } from './single-designer/single-designer.component';
import { DesignersComponent } from './designers/designers.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [SingleDesignerComponent, DesignersComponent],
  imports: [
    CommonModule,
    DesignersRoutingModule
  ],
  exports:[SingleDesignerComponent],
  providers:[]
})
export class DesignersModule { }