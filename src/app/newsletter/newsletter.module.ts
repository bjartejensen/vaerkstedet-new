import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewsletterDesktopComponent } from './newsletter-desktop/newsletter-desktop.component';


@NgModule({
  declarations: [NewsletterComponent, NewsletterDesktopComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewsletterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class NewsletterModule { }
