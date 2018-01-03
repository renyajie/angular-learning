import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from '../core/not-found.component';
import { HttpClientComponent } from './http-client.component';

const navigationRoutes: Routes = [
  {
    path: 'http-client',
    component: HttpClientComponent,
    /*
    //Children数组里的路由统一会附属于path
    children: [
      { path: '**', component: PageNotFoundComponent }
    ]
    */
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(navigationRoutes)
  ],
  providers: [],
  exports: [ RouterModule ]
})
export class HttpClientRoutingModule { }
