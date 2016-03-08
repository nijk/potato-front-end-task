/**
 * Created by nijk on 01/03/2016.
 */

import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { FeedItem } from './feed-item';
import { FlickrService } from './flickr.service';

import { FriendlyDatePipe } from '../pipes/date.pipe';

@Component({
    selector: 'feed-detail',
    template: require('./feed-detail.component.html'),
    inputs: ['feedItem'],
    pipes: [ FriendlyDatePipe ]
})

export class FeedDetailComponent implements OnInit {

    feedItem: FeedItem;
    errorMessage: string;

    constructor(
        private _feedService: FlickrService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._feedService.getFeedItem(id).subscribe(
            item => {
                console.info('ngOnInit', item);
                this.feedItem = item;
            },
            error => this.errorMessage = <any>error
        );
    }

    goBack() {
        window.history.back();
    }
}