/**
 * Created by nijk on 02/03/2016.
 */

import { Component, ViewEncapsulation } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { FeedComponent } from './feed/feed.component';
import { FeedListComponent } from './feed/feed-list.component';
import { FeedDetailComponent } from './feed/feed-detail.component';
import { FlickrService } from './feed/flickr.service';

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
    template: '<router-outlet></router-outlet>',
    styles: [ require('./styles/skeleton/skeleton.scss') ],
    encapsulation: ViewEncapsulation.None,
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ FlickrService ]
})

export class AppComponent {
    constructor() {
    }
}
