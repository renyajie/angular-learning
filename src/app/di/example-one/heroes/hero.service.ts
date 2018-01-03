import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

import { LoggerService } from '../core/logger.service';
import { UserService } from '../core/user.service';

@Injectable()
export class HeroService {

  constructor(
    private loggerService: LoggerService,
    // private isAuthorized: boolean,
    private userService: UserService
  ) { }

  getHeroes() {
    const isAuthorized = this.userService.user.isAuthorized;
    const auth = isAuthorized ? 'authorized' : 'unauthorized';
    this.loggerService.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => isAuthorized || !hero.isSecret);
  }

}
