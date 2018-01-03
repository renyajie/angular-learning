import { Component } from '@angular/core';

@Component({
  selector: 'app-f-ui-litter-tour',
  template: `
    <h3>综合实例: 输入英雄的姓名，加入数组,删除英雄: 输入开始删除的索引和连续删除的个数</h3>
    英雄姓名: <input #box1
      (keyup.enter)="addHero(box1.value); box1.value=''"
      (blur)="addHero(box1.value); box1.value=''">
    起始索引: <button (click)="addHero(box1.value)">添加新的英雄</button><br>
    起始索引: <input #box2><br>
    删除总数: <input #box3>
    <button (click)="deleteHero(box2.value, box3.value); box2.value=''; box3.value=''">
      删除英雄
    </button>
    <h3 *ngIf="message">{{message}}</h3>
    <ul>
      <li *ngFor="let hero of heroes">{{hero}}</li>
    </ul>
  `
})
export class LitterTourComponent {
  heroes: string[] = [
    'William', 'Thor', 'American Capitan', 'Honk'
  ];
  message = '';

  addHero(hero: string) {
    if (hero) {
      this.heroes.push(hero);
    }
  }

  deleteHero(index: number | string, count: number | string): void{
    const lastIndex = (+index) + (+count);
    if (lastIndex > this.heroes.length) {
      this.message = '超出数组长度';
      setTimeout(() => {
        this.message = '';
      }, 1000);
      return;
    }
    this.heroes.splice(+index, +count);
  }

}
