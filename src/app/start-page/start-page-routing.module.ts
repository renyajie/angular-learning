import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { StartPageComponent } from './start-page.component';

const startPageRoutes: Routes = [
  { path: 'start-page', component: StartPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(startPageRoutes)
  ],
  exports: [ RouterModule ]
})
export class StartPageRoutingModule { }
