/**
 * Created by nijk on 01/03/2016.
 */

import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

    getHeroes() {
        return Promise.resolve(HEROES);
    }
}
