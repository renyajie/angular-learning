import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UiRoutingModule } from './ui-routing.module';

import { UiComponent } from './ui.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiRoutingModule
  ],
  declarations: [UiComponent]
})
export class UiModule { }
