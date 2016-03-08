/**
 * Created by nijk on 02/03/2016.
 */

import { Injectable, Optional } from 'angular2/core';
import { Jsonp, Response, URLSearchParams } from 'angular2/http';
import { FeedItem } from './feed-item';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

@Injectable()
export class FlickrService {
    constructor(private jsonp: Jsonp){
    }

    protected feedUrl: string = 'https://api.flickr.com/services/feeds/photos_public.gne';

    private feed: FeedItem[] = [];

    protected transformItems (item : any, i: number) {
        item.id = i + 1;
        item.author = item.author.match(/\((.*)\)/)[1];
        // assume that the third paragraph is the proper description text
        item.description = item.description.match(/<p>(.*?)<\/p>/g)[2];

        if (item.description) {
            item.description = item.description.replace('<p>', '').replace('</p>', '').trim();
        }

        item.published = new Date(item.published);
        item.tags = item.tags.split(' ');
        return item;
    }

    protected fetchItems () {
        var params = new URLSearchParams();
        params.set('tags', 'potato');
        params.set('tagmode', 'all');
        params.set('format', 'json');
        params.set('jsoncallback', 'JSONP_CALLBACK');

        return this.jsonp.get(this.feedUrl, { search: params })
            .map(res => res.json().items)
            .map(items => this.feed = items.map((item, i) => this.transformItems(item, i)))
            .catch(this.handleError);
    }

    public getFeed () {
        if (this.feed.length > 0) {
            return Observable.create(observer => observer.next(this.feed.slice()));
        }
        return this.fetchItems();
    }

    public getFeedItem(id: number) {

        // @todo: provide error handling

        return Observable.create(
            observer => this.getFeed().subscribe(
                feed => observer.next(feed.filter(feedItem => feedItem.id === id)[0]),
                error => this.handleError(error)
            )
        );
    }

    public handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
