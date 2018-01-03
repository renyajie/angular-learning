import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenRoutingModule } from './template-driven-routing.module';

import { TemplateDrivenComponent } from './template-driven.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenRoutingModule
  ],
  declarations: [
    TemplateDrivenComponent,
    HeroFormComponent
  ]
})
export class TemplateDrivenModule { }
