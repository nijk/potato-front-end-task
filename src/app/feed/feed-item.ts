/**
 * Created by nijk on 02/03/2016.
 */

export interface FeedItem {
    id: number;
    author: string;
    author_id: string;
    description: string;
    link: string;
    media: {
        m: string
    };
    published: string;
    tags: string;
    title: string;
}
