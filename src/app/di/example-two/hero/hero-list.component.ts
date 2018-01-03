import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hero, HeroTaxReturn } from './hero';
import { HeroesService } from './hero.service';

@Component({
  selector: 'app-di-2-heroes-list',
  template: `
    <div>
      <h3>Hero Tax Returns</h3>
      <ul>
        <li *ngFor="let hero of heroes | async"
            (click)="showTaxReturn(hero)">{{hero.name}}
        </li>
      </ul>
      <app-di-2-hero-tax-return
        *ngFor="let selected of selectedTaxReturns; let i = index"
        [taxReturn]="selected"
        (close)="closeTaxReturn(i)">
      </app-di-2-hero-tax-return>
    </div>
    `,
  styles: ['li {cursor: pointer;}']
})
export class HeroesListComponent {
  heroes: Observable<Hero[]>;
  selectedTaxReturns: HeroTaxReturn[] = [];

  constructor(private heroesService: HeroesService) {
    // 总之我们得到了Observable<Hero[]>这个类型了，接下来交给pipe:async去接管就好了，我们不用管了
    this.heroes = heroesService.getHeroes();
  }

  showTaxReturn(hero: Hero) {
    this.heroesService.getTaxReturn(hero)
      .subscribe(htr => {
        // 如果数组中没有这个对象，使用push方法向组数里添加对象
        if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
          this.selectedTaxReturns.push(htr);
        }
      });
  }

  closeTaxReturn(ix: number) {
    // 去除数组元素
    this.selectedTaxReturns.splice(ix, 1);
  }
}
