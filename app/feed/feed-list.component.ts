/**
 * Created by nijk on 02/03/2016.
 */

import { Component, OnInit } from 'angular2/core';
import { Router, RouteConfig } from 'angular2/router';

import { FeedItem } from './feed-item';
import { FeedDetailComponent } from './feed-detail.component';
import { FeedService } from './feed.service';

@Component({
    selector: 'feed-list',
    templateUrl: 'app/feed/feed-list.component.html',
    styleUrls:  ['app/feed/feed-list.component.css'],
    directives: [ FeedDetailComponent ]
})

export class FeedListComponent implements OnInit {
    subTitle = 'My Feed';
    feedItems: FeedItem[];
    selectedItem: FeedItem;

    constructor(
        private _router: Router,
        private _feedService: FeedService) {
    }

    getFeed() {
        this._feedService.getFeed().then(feed => this.feedItems = feed);
    }

    ngOnInit() {
        this.getFeed();
    }

    gotoDetail(feedItem: FeedItem) {
        let link = ['FeedDetail', { id: feedItem.id }];
        this._router.navigate(link);
    }
}
