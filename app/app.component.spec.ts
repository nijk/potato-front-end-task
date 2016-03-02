/**
 * Created by nijk on 29/02/2016.
 */

import {AppComponent} from './app.component';


describe('AppComponent', () => {
    let component:AppComponent;

    beforeEach(() => {
        component = new AppComponent();
    });

    it('has title value', () => {
        expect(component.title).toEqual('Flickr Public Feed');
    });
});