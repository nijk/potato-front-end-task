/**
 * Created by nijk on 01/03/2016.
 */

import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { FeedItem } from './feed-item';
import { FlickrPublicFeedService } from '../flickr/flickr-public-feed.service.ts';

import { FriendlyDatePipe } from '../pipes/date.pipe';

@Component({
    selector: 'feed-detail',
    template: require('./feed-detail.component.html'),
    pipes: [ FriendlyDatePipe ]
})

export class FeedDetailComponent implements OnInit {
    constructor(
        private _router: Router,
        private _feedService: FlickrPublicFeedService,
        private _routeParams: RouteParams) {
    }

    feedItem: FeedItem;
    errorMessage: string;

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._feedService.getFeedItem(id).subscribe(
            item => this.feedItem = <FeedItem>item,
            error => this.errorMessage = <any>error
        );
    }

    goToList() {
        this._router.navigate(['FeedList']);
    }
}