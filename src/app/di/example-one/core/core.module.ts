import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
import { UserService } from './user.service';
import { EvenBetterLoggerService } from './even-better-logger.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    /* 1. 缩写
    LoggerService,
    其实LoggerService是下面这种写法的缩写
    {provide: LoggerService, useClass: LoggerService}
    */
    /**
     * 2. alias，别名
     * 注意使用的useExisting，不是useClass，否则会有两个实例
     * [ newLogger,
     *  { provider: oldLogger, useExisting: newLogger }
     * ]
     */
    UserService,
    { provide: LoggerService, useClass: EvenBetterLoggerService }
  ]
})
export class CoreModule { }
