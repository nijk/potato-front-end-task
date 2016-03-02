/**
 * Created by nijk on 02/03/2016.
 */

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@RouteConfig([
    {
        path: '/',
        name: 'Heroes',
        component: HeroesComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: HeroDetailComponent
    }
])

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ ROUTER_DIRECTIVES ],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})

export class AppComponent {
    title = 'Flickr Public Feed';
}
