import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from '../core/not-found.component';
import { DiComponent } from './di.component';

const diRoutes: Routes = [
  {
    path: 'dependency-injection',
    component: DiComponent,
    children: [
      {
        path: 'example-one',
        loadChildren: 'app/di/example-one/example-one.module#ExampleOneModule'
      },
      {
        path: 'example-two',
        loadChildren: 'app/di/example-two/example-two.module#ExampleTwoModule'
      },
      {
        path: 'example-three',
        loadChildren: 'app/di/example-three/example-three.module#ExampleThreeModule'
      },
      {
        path: '', redirectTo: 'example-one', pathMatch: 'full'
      },
      {
        path: '**', component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(diRoutes)
  ],
  exports: [ RouterModule ]
})
export class DiRoutingModule { }
