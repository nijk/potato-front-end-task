/**
 * Created by nijk on 02/03/2016.
 */

import { ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
import {
    it,
    describe,
    expect,
    beforeEach,
    inject,
    injectAsync,
    beforeEachProviders,
    MockApplicationRef,
    setBaseTestProviders,
    TestComponentBuilder,
    ComponentFixture
} from 'angular2/testing';

import {Location, Router, RouteRegistry } from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { provide, DirectiveResolver, ApplicationRef, Injectable, Provider, Component } from 'angular2/core';

import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS } from 'angular2/platform/testing/browser';

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);


import { AppComponent } from './app.component';
import { FeedService } from './feed/feed.service';

class MockPrimaryComponent {
}

@Injectable()
class MockFeedListComponent {
}

@Injectable()
class MockFeedDetailComponent {
}

@Injectable()
class MockFeedService {
}

describe('AppComponent', () => {
    let appComponent:AppComponent;
    let feedListComponent:MockFeedListComponent;
    let feedDetailComponent:MockFeedDetailComponent;

    beforeEachProviders(() => [
        ROUTER_PROVIDERS,
        provide(Location, { useClass: SpyLocation }),
        provide(ROUTER_PRIMARY_COMPONENT, { useClass: MockPrimaryComponent }),
        provide(ApplicationRef, { useClass: MockApplicationRef })
    ]);

    beforeEach(
        injectAsync([TestComponentBuilder, Router], (tcb: TestComponentBuilder, router: Router) => {
            return tcb.overrideProviders(AppComponent, [ provide(FeedService, { useClass: MockFeedService }) ])
                .createAsync(AppComponent)
                .then(() => {
                    appComponent = new AppComponent();
                    /*feedListComponent = new MockFeedListComponent();
                    feedDetailComponent = new MockFeedDetailComponent();*/
                    expect(appComponent.title).toEqual('Flickr Public Feed')
                });
        })
    );

    describe('Properties', () => {
        it('has title value', () => {
            expect(appComponent.title).toEqual('Flickr Public Feed');
        });
    });
});
