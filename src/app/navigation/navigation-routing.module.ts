import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './core/login.component';
import { NavigationComponent } from './navigation.component';
import { PageNotFoundComponent } from '../core/not-found.component';
import { ComposeMessageComponent } from './core/compose-message/compose-message.component';

import { CanDeactivateGuard } from './routing-guard/can-deactivate-guard.service';
import { AuthGuard } from './routing-guard/auth-guard.service';
import { SelectivePreloadingStrategy } from './core/selective-preload-strategy';

const navigationRoutes: Routes = [
  {
    path: 'navigation',
    component: NavigationComponent,
    // Children数组里的路由统一会附属于path
    children: [
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      },
      {
        path: 'hero',
        loadChildren: 'app/navigation/heroes/heroes.module#HeroesModule'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        // 使用懒加载加载admin，这里使用了admin，模块内部就不会再重复路径了
        path: 'admin',
        loadChildren: 'app/navigation/admin/admin.module#AdminModule',
        // canLoad在加载模块前先进行验证，可以的情况下才加载
        canLoad: [AuthGuard]
      },
      {
        path: 'crisis-center',
        loadChildren: 'app/navigation/crisis-center/crisis-center.module#CrisisCenterModule',
        // 自定义preload策略
        // data: { preload: true}
      },
      // Angular在同一等级上不支持多次重定向，为了放置重定向循环，只会执行一次重定向，所以在要这里更新信息
      { path: '', redirectTo: 'hero', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      navigationRoutes
      /*,
      {
        enableTracing: true,
        //定义preload策略，默认有两种策略，一是需要时再进行懒加载，二是PreloadAllModules是提前加载所有的懒加载模块
        //懒加载模块是指带有loadChildren的路径，此处使用了自定义preload策略
        preloadingStrategy: SelectivePreloadingStrategy
      }
      */
    )
  ],
  providers: [ CanDeactivateGuard, SelectivePreloadingStrategy ],
  exports: [ RouterModule ]
})
export class NavigationRoutingModule { }
