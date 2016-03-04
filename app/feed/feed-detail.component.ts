/**
 * Created by nijk on 01/03/2016.
 */

import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { FeedItem } from './feed-item';
import { FlickrService } from './flickr.service';

@Component({
    selector: 'feed-detail',
    templateUrl: 'app/feed/feed-detail.component.html',
    inputs: ['feedItem']
})

export class FeedDetailComponent implements OnInit {
    feedItem: FeedItem;

    constructor(
        private _feedService: FlickrService,
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