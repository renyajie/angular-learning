import { LoggerService } from '../core/logger.service';
import { UserService } from '../core/user.service';
import { HeroService } from './hero.service';

/*
const heroServiceFactory = (logger: LoggerService, userService: UserService) => {
    return new HeroService(logger, userService.user.isAuthorized);
};


export let heroServiceProvider = {
    provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [LoggerService, UserService]
};
*/
