import { Component } from '@angular/core';

@Component({
  selector: 'app-f-ui-click-me',
  template: `
    <h3>一个简单的按钮响应事件</h3>
    <p>
      <button (click)="onClickMe()">Click me!</button>
      {{flag ? clickMessage1 : 'No message.'}}
    </p>
    <p>
      <button (click)="onClickMe2($event)">Click with event!</button>
      {{clickMessage2}}
    </p>
  `
})
export class ClickMeComponent {
  flag = false;
  clickMessage1 = 'You are my hero!';

  clickTimes = 1;
  clickMessage2 = '';

  onClickMe() {
    this.flag = !this.flag;
  }

  onClickMe2(event: any) {
    const evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
    this.clickMessage2 = (`Click #${this.clickTimes++}. ${evtMsg}`);
  }
}
