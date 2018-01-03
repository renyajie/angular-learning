import { Component } from '@angular/core';

@Component({
    selector: 'app-f-ui-key-up',
    template: `
      <h3>通过#引用获取用户输入</h3>
      <p>
        按键抬起事件 keyup =>
        <input #box1 (keyup)="onKey(box1.value)">
        {{value1}}
      </p>
      <p>
        回车事件 keyup.enter =>
        <input #box2 (keyup.enter)="onEnter(box2.value)">
        {{value2}}
      </p>
      <p>
        失去焦点事件 blur =>
        <input #box3
          (keyup.enter)="update(box3.value)"
          (blur)="update(box3.value)">
        {{value3}}
      </p>
      <p>
        实时获取用户输入值，不需要类的帮助就可以完成，但要定义一个(keyup)="0"的事件，不管是啥，好像只有事件响应了才能得到值<br>=>
        <input #box4 (keyup)="0">
        {{box4.value}}
      </p>
    `
})
export class KeyUpComponent {
    value1 = '';
    value2 = '';
    value3 = '';

    onKey(value: string) { this.value1 += value + ' | '; }
    onEnter(value: string) { this.value2 = value; }
    update(value: string) { this.value3 = value; }
}