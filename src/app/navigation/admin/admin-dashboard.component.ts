import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { SelectivePreloadingStrategy } from '../core/selective-preload-strategy';

@Component({
  template:  `
    <p>Dashboard</p>
    <p>Session Id: {{ sessionId | async }}</p>
    <a id="anchor"></a>
    <p>Token: {{ token | async }}</p>

    Preload Modules
    <ul>
      <li *ngFor="let module of modules">{{ module }}</li>
    </ul>
  `
})
export class AdminDashboardComponent implements OnInit { 

  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];

  constructor(
    private route: ActivatedRoute,
    private preloadingStrategy: SelectivePreloadingStrategy
  ) {
    this.modules = preloadingStrategy.preloadedModules;
  }

  /**
   * 获取路由信息中放置的额外参数
   */
  ngOnInit() {
    this.sessionId = this.route.queryParamMap.map(params => params.get('sessionId') || 'None');
    this.token = this.route.fragment.map(fragment => fragment || 'None');
  }
}