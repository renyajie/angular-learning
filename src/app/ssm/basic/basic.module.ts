import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasicRoutingModule } from './basic-routing.module';

import { BasicComponent } from './basic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BasicRoutingModule
  ],
  declarations: [BasicComponent]
})
export class BasicModule { }
