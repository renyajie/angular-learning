import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { StartPageModule } from './start-page/start-page.module';
import { CoreModule } from './core/core.module';
import { HttpModule } from './http-client/http-client.module';
import { DiModule } from './di/di.module';
import { FormModule } from './form/form.module';
import { SsmModule } from './ssm/ssm.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    StartPageModule,
    NavigationModule,
    DiModule,
    FormModule,
    SsmModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
