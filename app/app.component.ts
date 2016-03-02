/**
 * Created by nijk on 29/02/2016.
 */

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Heroes']">Home</a>
        </nav>
        <heroes></heroes>
        <router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES ],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})

@RouteConfig([
    {
        path: '/',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/detail/...',
        name: 'Detail',
        component: HeroDetailComponent
    }
])

export class AppComponent {
    title = 'Flickr Public Feed';
}
