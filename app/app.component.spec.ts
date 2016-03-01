/**
 * Created by nijk on 29/02/2016.
 */

//import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {AppComponent} from './app.component';


describe('AppComponent', () => {
    let component:AppComponent;

    beforeEach(() => {
        let component = new AppComponent();
    });

    it('has name given in the constructor', () => {
        expect(component).toEqual('Hello World');
    });
});