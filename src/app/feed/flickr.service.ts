/**
 * Created by nijk on 02/03/2016.
 */

import { Injectable, Optional } from 'angular2/core';
import { Jsonp, Response, URLSearchParams } from 'angular2/http';
import { FeedItem } from './feed-item';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class FlickrService {
    constructor(private jsonp: Jsonp){
    }

    protected feedUrl = 'https://api.flickr.com/services/feeds/photos_public.gne';

    protected transformItems (item, i: number) {
        item.id = i + 1;
        item.author = item.author.match(/\((.*)\)/)[1];
        item.published = new Date(item.published);
        item.tags = item.tags.split(' ');
        return item;
    }

    public getFeed () {
        var params = new URLSearchParams();
        params.set('tags', 'potato');
        params.set('tagmode', 'all');
        params.set('format', 'json');
        params.set('jsoncallback', 'JSONP_CALLBACK');

        return this.jsonp.get(this.feedUrl, { search: params })
            .map(res => res.json().items)
            //.do(items => items.map((item, i) => console.info('item:', i, item)))
            .map(items => items.map((item, i) => this.transformItems(item, i)))
            .catch(this.handleError);
    }

    /*public getFeedItem(id: number) {
        return Promise.resolve(/!*FeedItem*!/).then(
            feed => feed.filter(feedItem => feedItem.id === id)[0]
        );
    }*/

    public handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
