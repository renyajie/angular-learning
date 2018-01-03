/* tslint:disable:one-line*/
import { InjectionToken } from '@angular/core';
import { Component, Inject } from '@angular/core';

import { DateLoggerService } from '../core/date-logger.service';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { LoggerService } from '../core/logger.service';
import { MinimalLogger } from '../core/minimal-logger.service';
import { RUNNERS_UP, runnersUpFactory } from '../core/runners-up';

export const TITLE = new InjectionToken<string>('title');
const someHero = new Hero(42, 'Magma', 'Had a great month!', '555-555-5555');

@Component({
  selector: 'app-di-3-hero-of-the-month',
  templateUrl: './hero-of-the-month.component.html',
  providers: [
    { provide: Hero, useValue: someHero }, // useValue可以提供一个固定值，可以是一个类，或是一个简单对象
    { provide: TITLE, useValue: 'Hero of the Month' }, // useClass相当于HeroService全写，新建一个类
    { provide: HeroService, useClass: HeroService }, // userClass可以让其他的类来代替声明的类
    { provide: LoggerService, useClass: DateLoggerService }, // userExsiting是使用别名，它和useClass的区别在于是不是新建一个类
    { provide: MinimalLogger, useExisting: LoggerService }, // 此处MinimalLogger是abstract class，可以起到缩小API的作用
    { provide: RUNNERS_UP, useFactory: runnersUpFactory(2), deps: [Hero, HeroService] } // 这是一个工厂方法，相当与提供了一个service，不过我们可以通过这种方式来定制需要service
  ]
})
export class HeroOfTheMonthComponent {
  logs: string[] = [];

  constructor(
    @Inject(TITLE) public title: string, // 如果useValue是一个Token 就要采用@Inject的方式
    public heroOfTheMonth: Hero, // 如果useValue是一个类，和普通service注入相同
    logger: MinimalLogger,
    @Inject(RUNNERS_UP) public runnersUp: string) // 工厂方法的类型是它的返回值类型
  {
    this.logs = logger.logs;
    logger.logInfo('starting up');
  }
}
