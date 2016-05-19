# Shopping Basket

## Using it

`npm install`

`npm run build` will compile with webpack and let you serve from any local server (such as `http-server`).

`npm run serve` will compile with webpack and launch webpack-dev-server at `localhost:8080`.

Alternatively, if you have webpack or webpack-dev-server installed globally simply call them from this directory in place of the above commands.

## Tech/Design

* React & Redux

 * Declarative and predictable components - you know what you'll get for any given state, and don't have to worry about crazy chains of event handlers

 * Easily tested - with reducers using pure functions and React components being renderable in nodeJS using jsdom, reliable tests can be written and easily run against both

 * Extensible - `setState()` would be enough to manage this single component's state, but Redux provides and easy to extend state management platform from the start

 * Re-usable - in addition to being easily extended, well separated components and associated reducers can be dropped in to another React + Redux project with minimal changes



* File structure

 * For an app this size it would be fine to have all components in one file, all reducers in another, etc. However with extensibility in mind I've used a fleshed out folder and file structure, making it clear where new components and so on should be added
