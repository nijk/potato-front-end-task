/**
 * Created by nijk on 02/03/2016.
 */

import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { FriendlyDatePipe } from '../pipes/date.pipe';

import { FeedItem } from './feed-item';
import { FeedDetailComponent } from './feed-detail.component';
import { FlickrPublicFeedService } from '../flickr/flickr-public-feed.service.ts';

@Component({
    selector: 'feed-list',
    template: require('./feed-list.component.html'),
    styles:  [
        require('./feed-list.component.scss'),
        require('./feed-item.component.scss')
    ],
    directives: [ FeedDetailComponent ],
    pipes: [ FriendlyDatePipe ]
})

export class FeedListComponent implements OnInit {
    constructor(
        private _router: Router,
        private _feedService: FlickrPublicFeedService) {
    }

    feedItems: FeedItem[];
    errorMessage: string;

    getFeed() {
        this._feedService.getFeed().subscribe(
            feed => this.feedItems = feed,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit() {
        this.getFeed();
    }

    gotoDetail(feedItem: FeedItem) {
        this._router.navigate(['FeedDetail', { id: feedItem.id }]);
    }
}
