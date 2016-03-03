/**
 * Created by nijk on 02/03/2016.
 */

import { FEED } from '../api/mock-feed';
import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { FeedItem } from './feed-item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedService {
    constructor (private http: Http) {}

    //private _feedUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json';
    private _feedUrl = '/app/feed/flickr.json';

    getFeed () {
        return this.http.get(this._feedUrl)
            .map(res => <FeedItem[]> res.json().items)
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getFeedItem(id: number) {
        return Promise.resolve(FEED).then(
            feed => feed.filter(feedItem => feedItem.id === id)[0]
        );
    }

    /*getFeed() {
        return Promise.resolve(FEED);
    }*/
}
