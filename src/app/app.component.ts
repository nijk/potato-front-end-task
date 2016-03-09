/**
 * Created by nijk on 02/03/2016.
 */

import { Component, ViewEncapsulation } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { FeedComponent } from './feed/feed.component';

import { FlickrPublicFeedService } from './flickr/flickr-public-feed.service.ts';

@RouteConfig([
    {
        path: '/...',
        name: 'Feed',
        component: FeedComponent,
        useAsDefault: true
    }
])

@Component({
    selector: 'app',
    template: '<div class="container"><div class="row"><router-outlet></router-outlet></div></div>',
    styles: [ require('./styles/skeleton/skeleton.scss') ],
    encapsulation: ViewEncapsulation.None,
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ FlickrPublicFeedService ]
})

export class AppComponent {
    constructor() {
    }
}
