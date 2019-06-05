## The Movie Database Challenge
React application for the movie database challenge 

Live in: [http://52.67.174.10](http://52.67.174.10:5000)

# Architecture
The application is separated in components pattern.

> Component patterns are best use practices and were first introduced to split the data or logic layer and the UI or presentational layer. By dividing responsibilities amongst your components, you can create more reusable, cohesive components that can be used to _compose_ complex UI’s. This is especially important when building apps to scale.

[See more](https://medium.com/teamsubchannel/react-component-patterns-e7fb75be7bb0)

# How to Run

**Requirements**
 - Node  v.8
 - Yarn

## With Node
> $ cd tmdb-web
> $ yarn install 
> $ yarn start

## With Docker

> $ docker build -t tmdb/web .
> $ docker run -d -p 80:8080 tmdb/api

Available in http://localhost:8080

### ​ ​ Third-party​ ​ Libraries

 - [axios](https://github.com/axios/axios)  - Promise based HTTP client for the browser and node.js
 - [bootstrap](https://github.com/expressjs/cors) The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.
 - [i18next]([https://github.com/i18next/i18next](https://github.com/i18next/i18next))  - For Internationalization
 - [moment](https://github.com/moment/moment) - Parse, validate, manipulate, and display dates in javascript.
 - [redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps
 - [redux-thunk](https://github.com/reduxjs/redux-thunk) - A middleware for basic Redux
