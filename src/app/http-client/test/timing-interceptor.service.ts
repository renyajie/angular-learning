import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

    /**
     * 计时拦截器
     * @param req 
     * @param next 
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        return next
        .handle(req)
        .do(event => {
            if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
            }
        });
    }
}