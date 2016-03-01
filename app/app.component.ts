/**
 * Created by nijk on 29/02/2016.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: '<h1>{{title}}</h1>'
})

export class AppComponent {
    public title = 'Hello World';
}