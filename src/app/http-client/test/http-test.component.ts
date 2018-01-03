import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import 'rxjs/add/operator/retry';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { HttpParams } from '@angular/common/http/src/params';
import { HttpRequest } from 'selenium-webdriver/http';

//定义返回JSON数据结构
interface itemsResponse {
  result: string[];
}

/**
 * HttpClient中的基础操作
 */
@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html'
})
export class HttpTestComponent implements OnInit {

  result: string[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

  getMethod1() {
    // 直接接收JSON的情况下只能这样接收GET方法里的数据
    this.httpClient.get('/api/items').subscribe(data => {
      this.result = data['result'];
    });
  }

  getMethod2() {
    // 定义了JSON返回数据的结构之后，就可以像操作一个对象一样操作
    this.httpClient.get<itemsResponse>('/api/items').subscribe(data => {
      this.result = data.result;
    });
  }

  getMethod3() {
    //返回请求的全部数据，之前只返回了body，加上{observe: 'response'}返回header和body
    this.httpClient.get<itemsResponse>('/api/items', { observe: 'response' })
      .subscribe(response => {
        //这里的response包含了header和body两部分信息，而body部分就是itemsResponse结构，和方法2一样
        console.log(response.headers.get('X-Custom-Header'));
        console.log(response.body.result);
      })
  }

  errorHandle1() {
    //我们可以在err这个匿名函数里处理错误, retry(n)可以重复发送n次请求
    this.httpClient.get<itemsResponse>('/api/items').retry(3)
      .subscribe(
      data => { },
      err => {
        console.log('Error happen...');
      }
      )
  }

  errorHandle2() {
    this.httpClient.get('/api/items')
      .subscribe(
      data => { },
      (err: HttpErrorResponse) => {
        //前端自己的错误或网络错误
        if (err.error instanceof Error) {
          console.log('An error happend: ' + err.error.message);
        } else {
          //后台出错
          console.log(`Backend return code ${err.status}, body was: ${err.error}`);
        }
      }
      )
  }

  getFile() {
    //请求一个文件
    this.httpClient.get('/textfile.txt', { responseType: 'text' })
      .subscribe(data => console.log(data));
  }

  body = { name: 'thor' };

  postMethod1() {
    //向服务器提交数据，要调用subscribe()才会发出请求，而且每次调用subscribe()的请求是独立的
    this.httpClient.post('/api/developers/add', this.body).subscribe();
  }

  postMethod2() {
    //我们可以通过一个可选对象来构造request中其他的需求，设置Header
    this.httpClient.post('/api/developers/add', this.body, {
      headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    })
      .subscribe();
  }

  postMethod3() {
    //设置参数，效果如同构造了url: /api/developers/add?id=3
    this.httpClient.post('/api/developers/add', this.body, {
      params: new HttpParams().set('id', '3')
    })
      .subscribe();
  }

}