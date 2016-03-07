/**
 * Created by nijk on 02/03/2016.
 */

import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { FriendlyDatePipe } from '../pipes/date.pipe';

import { FeedItem } from './feed-item';
import { FeedDetailComponent } from './feed-detail.component';
import { FlickrService } from './flickr.service';

@Component({
    selector: 'feed-list',
    template: require('./feed-list.component.html'),
    styles:  [ require('./feed-list.component.css') ],
    directives: [ FeedDetailComponent ],
    pipes: [ FriendlyDatePipe ]
})

export class FeedListComponent implements OnInit {
    constructor(
        private _router: Router,
        private _feedService: FlickrService,
        private _routeParams: RouteParams) {
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
        let link = ['FeedDetail', { id: feedItem.id }];
        this._router.navigate(link);
    }
}
