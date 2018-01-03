import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[] = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if(route.data && route.data['preload']) {
            //记录提前preload的模块路径，并加载
            this.preloadedModules.push(route.path);
            console.log('Preloaded: ' + route.path);
            return load();
        } else {
            return Observable.of(null);
        }
    }
}