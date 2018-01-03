import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientRoutingModule } from './htttp-client-routing.module';

import { HttpClientComponent } from './http-client.component';
import { NoopInterceptor } from './test/noop-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientRoutingModule
  ],
  declarations: [HttpClientComponent],
  // 提供拦截器，multi参数要设置为true
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true
  }]

})
export class HttpModule { }
