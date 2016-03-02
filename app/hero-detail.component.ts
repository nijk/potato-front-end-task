/**
 * Created by nijk on 01/03/2016.
 */

import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/heroes-detail.component.html',
    inputs: ['hero'],
    directives: [ ROUTER_DIRECTIVES ]
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}