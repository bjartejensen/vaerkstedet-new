import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionsDesktopComponent } from './collections-desktop/collections-desktop.component';
import { CollectionDesktopComponent } from './collection-desktop/collection-desktop.component';


@NgModule({
  declarations: [CollectionsComponent, CollectionComponent, CollectionsDesktopComponent, CollectionDesktopComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
