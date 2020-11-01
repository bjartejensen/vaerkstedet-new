import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MenuListComponent } from './menu-list/menu-list.component';
import { RouterModule } from '@angular/router';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { MenuListDesktopComponent } from './menu-list-desktop/menu-list-desktop.component';

const modules = [
  CommonModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  LayoutModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  RouterModule
  

];

@NgModule({
  declarations: [ShellComponent, MenuListComponent, MenuListItemComponent, MenuListDesktopComponent],
  imports: [
    modules
  ],
  exports:[modules,ShellComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
 }
