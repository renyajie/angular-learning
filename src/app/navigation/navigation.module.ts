import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationRoutingModule } from './navigation-routing.module';
import { CoreModule } from './core/core.module';

import { NavigationComponent } from './navigation.component';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    //HeroesModule(in CoreModule) is imported before AppRoutingModule
    CoreModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { 
  //开发的时候用，检查route的配置
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
