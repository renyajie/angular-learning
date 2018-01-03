import { Component } from '@angular/core';

import { LoggerService } from './core/logger.service';
import { UserContextService } from './core/user-context.service';
import { UserService } from './core/user.service';

@Component({
  templateUrl: './example-three.component.html',
  providers: [LoggerService, UserContextService, UserService],

  styleUrls: ['./example-three.component.css']
})
export class ExampleThreeComponent {

  private userId = 1;

  constructor(logger: LoggerService, public userContext: UserContextService) {
    userContext.loadUser(this.userId);
    logger.logInfo('ExampleThreeComponent initialized');
  }
}
