/**
 * Created by nijk on 02/03/2016.
 */

import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { JSONP_PROVIDERS } from 'angular2/http';

import { FeedListComponent } from './feed-list.component';
import { FeedDetailComponent } from './feed-detail.component';
import { FlickrPublicFeedService } from '../flickr/flickr-public-feed.service.ts';

@Component({
    selector: 'feed',
    template:  require('./feed.component.html'),
    directives: [ RouterOutlet ],
    providers:  [
        JSONP_PROVIDERS,
        FlickrPublicFeedService
    ]
})

@RouteConfig([
    {
        path:'/',
        name: 'FeedList',
        component: FeedListComponent,
        useAsDefault: true
    },
    {
        path:'/feed/:id',
        name: 'FeedDetail',
        component: FeedDetailComponent
    }
])

export class FeedComponent {
    constructor(private _feedService: FlickrPublicFeedService){
    }

    title = `${this._feedService.title} Feed`;
}
