/**
 * Created by nijk on 02/03/2016.
 */

import { Component, OnInit } from 'angular2/core';
import { Router, RouteConfig } from 'angular2/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
    directives: [ HeroDetailComponent ]
})

export class HeroesComponent implements OnInit {
    subTitle = 'My Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail(hero: Hero) {
        let link = ['Detail', { id: hero.id }];
        this._router.navigate(link);
    }
}
