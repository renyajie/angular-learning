import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login.module';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginComponent } from './login.component';

import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    LoginModule
  ],
  declarations: [
    ComposeMessageComponent,
    LoginComponent
  ],
  providers: [DialogService]
})
export class CoreModule { }
