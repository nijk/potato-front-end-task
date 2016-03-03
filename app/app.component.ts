/**
 * Created by nijk on 02/03/2016.
 */

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { FeedListComponent } from './feed/feed-list.component';
import { FeedDetailComponent } from './feed/feed-detail.component';
import { FeedService } from './feed/feed.service';

@RouteConfig([
    {
        path: '/',
        name: 'FeedList',
        component: FeedListComponent,
        useAsDefault: true
    },
    {
        path: '/feed/:id',
        name: 'FeedDetail',
        component: FeedDetailComponent
    }
])

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ ROUTER_DIRECTIVES ],
    providers: [
        ROUTER_PROVIDERS,
        FeedService
    ]
})

export class AppComponent {
    title = 'Flickr Public Feed';
}
