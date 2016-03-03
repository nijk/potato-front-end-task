/**
 * Created by nijk on 02/03/2016.
 */

import { ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
import { it, describe, expect, beforeEach, inject, beforeEachProviders, MockApplicationRef } from 'angular2/testing';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { provide, ApplicationRef, Injectable, Provider } from 'angular2/core';


//import { Component } from 'angular2/core';

class MockPrimaryComponent {
}

@Injectable()
class FeedListComponent {
}

@Injectable()
class MockFeedService {
}

import { AppComponent } from './app.component';


describe('AppComponent', () => {
    let component:AppComponent;

    beforeEachProviders(() => [
        ROUTER_PROVIDERS,
        provide(ROUTER_PRIMARY_COMPONENT, { useClass: MockPrimaryComponent }),
        FeedListComponent,
        provide(Provider, { useClass: MockFeedService }),
        provide(ApplicationRef, { useClass: MockApplicationRef })
    ]);

    beforeEach(() => {
        component = new AppComponent();
    });

    describe('Properties', () => {
        it('has title value', () => {
            expect(component.title).toEqual('Flickr Public Feed');
        });
    });

    describe('Routing', () => {
        it('should validate the truth', () => {
            expect(true).toBeTruthy();
        });

        /*it('should validate the truth',
            inject([FeedListComponent], () => {

                console.info('FeedListComponent',FeedListComponent);

                expect(true).toBeTruthy();
            })
        );*/
    });
});