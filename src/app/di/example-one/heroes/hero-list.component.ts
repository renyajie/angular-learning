import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { UserService } from '../core/user.service';
import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'app-di-hero-list',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `
})
export class HeroListComponent {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  refurbish() {
    this.heroes = this.heroService.getHeroes();
  }
}
