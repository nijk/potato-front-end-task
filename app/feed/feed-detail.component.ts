/**
 * Created by nijk on 01/03/2016.
 */

import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { FeedItem } from './feed-item';
import { FeedService } from './feed.service';

@Component({
    selector: 'feed-detail',
    templateUrl: 'app/feed/feed-detail.component.html',
    inputs: ['feedItem'],
    directives: [ ROUTER_DIRECTIVES ]
})

export class FeedDetailComponent implements OnInit {
    feedItem: FeedItem;

    constructor(
        private _feedService: FeedService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._feedService.getFeedItem(id)
            .then(feedItem => this.feedItem = feedItem);
    }

    goBack() {
        window.history.back();
    }
}