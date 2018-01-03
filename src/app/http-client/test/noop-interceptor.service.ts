import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

/**
 * 拦截器，和Struts2里面的一样，发出请求的在拦截链里面拦截一遍，然后接收的时候再反向拦截
 */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //request不能直接修改，必须先clone才能修改，下面是替换url的示例
    const dupReq = req.clone();
    const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
    //调用下一个拦截器，或是终点
    return next.handle(req);
  }
}