import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.component';
import { LitterTourComponent } from './litter-tour.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ClickMeComponent,
    KeyUpComponent,
    LitterTourComponent
  ],
  exports: [
    ClickMeComponent,
    KeyUpComponent,
    LitterTourComponent
  ]
})
export class DemoModule { }
