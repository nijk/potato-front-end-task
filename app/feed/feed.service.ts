/**
 * Created by nijk on 02/03/2016.
 */

import { Injectable, Optional } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { FeedItem } from './feed-item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedService {
    constructor (@Optional() protected http: Http) {}

    protected feedUrl = '/app/api/mock-feed.json';

    protected transformItems (item: any, i: number) {
        return item;
    }

    public getFeed () {
        return this.http.get(this.feedUrl)
            .map(res => res.json().items)
            .map(items => items.map((item, i) => this.transformItems(item, i)))
            .do(data => console.log(data[0]))
            .catch(this.handleError);
    }

    public getFeedItem(id: number) {
        return Promise.resolve(FeedItem).then(
            feed => feed.filter(feedItem => feedItem.id === id)[0]
        );
    }

    public handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
