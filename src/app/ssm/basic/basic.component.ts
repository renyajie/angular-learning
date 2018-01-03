import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Message } from '../core/message';
import { Employee } from '../core/employee';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  tips: string[] = [
    'Get 和 Delete方法没有body参数，只能通过设置HttpParams来向服务器发送参数',
    'Put 和 Post 可以通过body和HttpParams两种方式向服务器发送数据',
    'body参数可以发送任何对象，当contentType是application/json的时候，服务器要用@RequestBody接收',
    '构造的HttpParams对象只能当做询问参数，在服务器要用@RequestParam接收'
  ];
  getMessageOne: string;
  getMessageTwo: string;
  getMessageThree: string;
  getMessageFour: string;
  postMessageOne: string;
  postMessageTwo: string;
  deleteMessageOne: string;
  putMessageOne: string;
  url = 'api/angular/';

  model = new Employee(null, 'ryj', null, '925865936@qq.com', null);
  submitted = false;

  constructor(private httpClient: HttpClient) {
    this.getMessageOne = '待显示信息';
    this.getMessageTwo = '待显示信息';
    this.getMessageThree = '待显示信息';
    this.getMessageFour = '待显示信息';
    this.postMessageOne = '待显示信息';
    this.postMessageTwo = '待显示信息';
    this.deleteMessageOne = '待显示信息';
    this.putMessageOne = '待显示信息';
  }

  ngOnInit() {
  }

  // 从服务器获取JSON数据，服务器返回一个Message对象
  getSimpleMessage() {
    const testUrl = this.url + 'getSimpleMessage';
    this.httpClient.get(testUrl).subscribe(data => {
      this.getMessageOne = data['message'];
    });
  }

  // 带有参数的Get方法，服务器返回一个Message对象
  getSimpleMessageWithParams() {
    const params = new HttpParams()
    .set('name', 'ren ya jie')
    .set('age', '1');
    const testUrl = this.url + 'getSimpleMessageWithParams';
    this.httpClient.get(testUrl, {params}).subscribe(data => {
      this.getMessageTwo = `Message: ${data['message']}, extend: ${data['extend']['info']}`;
    });
  }

  // 带有参数的Get方法，服务器在Message对象中携带另一个对象返回
  getSimpleObject() {
    const params = new HttpParams()
    .set('id', '1');
    const testUrl = this.url + 'getSimpleObject';
    this.httpClient.get(testUrl, {params}).subscribe(data => {
      const emp: Employee = Employee.fromJSON(data['extend']['info']);
      this.getMessageThree = `接收到的对象: ${emp}`;
    });
  }

  // Get方法，服务器在Message对象中携带一个对象列表返回
  getObjectList() {
    const testUrl = this.url + 'getObjectList';
    this.httpClient.get(testUrl).subscribe(data => {
      const emps: Employee[] = [];
       data['extend']['info'].map(emp => emps.push(Employee.fromJSON(emp)));
      this.getMessageFour = `接收到的对象数组: ${emps}`;
    });
  }

  // POST方法，直接通过匿名的语法向服务器提交一个对象
  receiveMessageFromWebsite() {
    const testUrl = this.url + 'receiveMessageFromWebsite';
    this.httpClient.post(testUrl, {
      'code': '123456',
      'message': 'Bingo'
    }).subscribe(
      data => {
        this.postMessageOne
          = `Message: ${data['message']}, extend: ${data['extend']['info']}`;
      }
    );
  }

  newEmployee() {
    this.model = new Employee(null, null, null, null, null);
  }

  onSubmit() {
    this.submitted = true;
  }

  // 向服务器提交Form表单数据，通过body参数携带表单数据
  receiveMessageFromWebsiteByForm() {
    const testUrl = this.url + 'receiveMessageFromWebsiteByForm';
    this.httpClient.post(testUrl, this.model).subscribe(
      data => {
        this.postMessageTwo
          = `Message: ${data['message']}, extend: ${data['extend']['info']}`;
      }
    );
  }

  // 携带参数的Delete方法
  deleteMessage(value: string) {
    const params = new HttpParams()
    .set('params', value);
    const testUrl = this.url + 'deleteMessage';
    this.httpClient.delete(testUrl, {params}).subscribe(
      data => {
        this.deleteMessageOne
          = `Message: ${data['message']}, extend: ${data['extend']['info']}`;
      }
    );
  }

  // 携带参数的Put方法，可以携带body
  putMessage(value: string) {
    const params = new HttpParams()
    .set('params', value);
    const testUrl = this.url + 'putMessage';
    this.httpClient.put(testUrl, {
      'empName': 'ryj'
    }, {params}).subscribe(
      data => {
        this.putMessageOne
          = `Message: ${data['message']}, extend: ${data['extend']['info']}`;
      }
    );
  }
}
