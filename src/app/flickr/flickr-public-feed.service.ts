/**
 * Created by nijk on 02/03/2016.
 */

import { Injectable, Optional } from 'angular2/core';
import { Jsonp, Response, URLSearchParams } from 'angular2/http';
import { FeedItem } from '../feed/feed-item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlickrPublicFeedService {
    constructor(private jsonp: Jsonp){
    }
    
    public title: string = 'Flickr Public';

    private _feedUrl: string = 'https://api.flickr.com/services/feeds/photos_public.gne';

    private _feed: FeedItem[] = [];

    /**
     * Transform the Flickr response in to something a little more helpful
     * @param item
     * @param i
     * @returns {any}
     * @private
     */
    private _transformItems (item : any, i: number) {
        // Add an ID for routing to use
        item.id = i + 1;
        // Strip the email address and parentheses from the author value
        item.author = item.author.match(/\((.*)\)/)[1];
        // Assume that the third paragraph is the proper description text
        item.description = item.description.match(/<p>(.*?)<\/p>/g)[2] || '';
        item.description = item.description.replace('<p>', '').replace('</p>', '').trim();

        item.published = new Date(item.published);
        // Create an array of tags
        item.tags = item.tags.split(' ');
        return item;
    }

    private _handleError (error: Response) {
        const defaultErrorMessage: Object = { error: 'Server error' };
        const errorMessage = (error.json() || defaultErrorMessage).error;

        console.error(errorMessage);
        return Observable.throw(new Error(errorMessage));
    }

    public getFeed () {
        // Return a cached version if possible
        if (this._feed.length > 0) {
            return Observable.create(observer => observer.next(this._feed.slice()));
        }

        const params = new URLSearchParams();
        params.set('tags', 'potato');
        params.set('tagmode', 'all');
        params.set('format', 'json');
        params.set('jsoncallback', 'JSONP_CALLBACK');

        return this.jsonp.get(this._feedUrl, { search: params })
            .map(res => res.json().items)
            .map(items => this._feed = items.map((item, i) => this._transformItems(item, i)))
            .catch(this._handleError);
    }

    /**
     * Return a single FeedItem object from the array of items
     * @param id
     * @returns {any}
     */
    public getFeedItem(id: number) {
        return Observable.create(
            observer => this.getFeed().subscribe(
                feed => observer.next(feed.filter(feedItem => feedItem.id === id)[0]),
                error => this._handleError(error)
            )
        );
    }
}
