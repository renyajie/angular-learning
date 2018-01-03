import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import { UserService } from './user.service';
import { HeroService } from '../heroes/hero.service';

@Injectable()
export class EvenBetterLoggerService extends LoggerService {

  constructor(private userService: UserService) {
    super();
  }

  log(message: string) {
    const name = this.userService.user.name;
    super.log(`Message to ${name}: ${message}`);
  }

}
