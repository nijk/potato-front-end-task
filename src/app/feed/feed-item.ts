/**
 * Created by nijk on 02/03/2016.
 */

export interface FeedItem {
    id: number;
    author: string; //@todo: use a directive to regex the name from the string?
    author_id: string;
    description: string;
    link: string;
    media: {
        m: string
    };
    published: string;
    tags: string; //@todo: use a directive to split the string into an array?
    title: string;
}
