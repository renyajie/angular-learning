import { Component } from '@angular/core';

import { HeroService } from './hero.service';
import { LoggerService } from '../core/logger.service';

//////// HeroBiosComponent ////
@Component({
  selector: 'app-di-3-hero-bios',
  template: `
    <app-di-3-hero-bio [heroId]="1"></app-di-3-hero-bio>
    <app-di-3-hero-bio [heroId]="2"></app-di-3-hero-bio>
    <app-di-3-hero-bio [heroId]="3"></app-di-3-hero-bio>`,
  providers: [HeroService]
})
export class HeroBiosComponent {
  constructor(logger: LoggerService) {
    logger.logInfo('Creating HeroBiosComponent');
  }
}

//////// HeroBiosAndContactsComponent ////
@Component({
  selector: 'app-di-3-hero-bios-and-contacts',
  template: `
    <app-di-3-hero-bio [heroId]="1"> <app-di-3-hero-contact></app-di-3-hero-contact> </app-di-3-hero-bio>
    <app-di-3-hero-bio [heroId]="2"> <app-di-3-hero-contact></app-di-3-hero-contact> </app-di-3-hero-bio>
    <app-di-3-hero-bio [heroId]="3"> <app-di-3-hero-contact></app-di-3-hero-contact> </app-di-3-hero-bio>`,
  providers: [HeroService]
})
export class HeroBiosAndContactsComponent {
  constructor(logger: LoggerService) {
    logger.logInfo('Creating HeroBiosAndContactsComponent');
  }
}
