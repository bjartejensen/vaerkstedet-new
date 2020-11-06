import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ContactDesktopComponent } from './contact-desktop/contact-desktop.component';

@NgModule({
  declarations: [ContactComponent, ContactDesktopComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class ContactModule { }
