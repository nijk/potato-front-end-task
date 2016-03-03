/**
 * Created by nijk on 02/03/2016.
 */

import { FEED } from '../api/mock-feed';
import { Injectable } from 'angular2/core';

@Injectable()
export class FeedService {
    getFeedItem(id: number) {
        return Promise.resolve(FEED).then(
            feed => feed.filter(feedItem => feedItem.id === id)[0]
        );
    }

    getFeed() {
        return Promise.resolve(FEED);
    }
}
