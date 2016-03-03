/**
 * Created by nijk on 02/03/2016.
 */

import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { FeedListComponent }   from './feed-list.component';
import { FeedDetailComponent } from './feed-detail.component';
import { FeedService }         from './feed.service';

@Component({
    templateUrl:  './app/feed/feed.component.html',
    directives: [ RouterOutlet ],
    providers:  [ FeedService ]
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
    title = 'Flickr Public Feed';
}
