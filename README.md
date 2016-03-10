# Potato Front End Task

## Introduction

During this task I have chosen to use Angular2, Typescript and RxJS.
I come from a background of using ReactJS & Flux, so I saw this as a good opportunity to learn and understand Angular2.
  
This has allowed me to consider the fundamental differences between an approach to building a single page app in Angular and React/Flux.
     
## Approach

- Angular2 (ng2) using Typescript 1.8
- Favoured Webpack/CommonJS over BrowserSync/SystemJS
- Dates formatted using MomentJS
- SASS Framework: Skeleton responsive
- ng2 structure:
    - Service for Flickr integration
    - JSONP XHR for API call
    - Pipes for transformations

## Improvements/Considerations

- The wireframes indicate that the tags on the detail page should link somewhere. 
    - As a further piece of work I would be inclined to link the tags back to the listing page and allow the tag to be passed to the Flickr API in a dynamic way, allowing for initial results to be returned against the 'potato' tag, then further results (after user clicks a tag in detail page) would be for that tag. This then presents a navigational issue of returning to the 'potato' results or indeed previous results for other tags. I would approach this by storing an array of previous tags and present these in the form of a control that allowed the user to revisit any of their previous listings.  
- Payload size / network performance issues to be improved
- Add unit/e2e tests

## Issues faced
  
During this task I have faced a few challenges:

- Given that Angular2 is in Beta phase, the documentation and community support on the new technology is still in its infancy. This resulted in slower progress through some of the more complex areas of development.
- Both Typescript & ReactiveExtensions (RxJS) were also new to me, resulting in additional learning for those technologies.
- Documentation around unit & e2e testing in Angular2 and diagnosing issues was hard. I decided to drop them after some time attempting to get the tests to work.

### Install
`npm install`

### Run application
`npm start`

Visit [http://localhost:3000/](http://localhost:3000/) in a browser 

### Backlog

[Trello board for managing the task](https://trello.com/b/Q1PtidFs/potato-front-end-task)

### License
This project is released under the [MIT license](https://github.com/nijk/potato-front-end-task/blob/master/LICENSE).
