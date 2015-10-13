/**
 * Created by Izzy on 28/02/15.
 */
'use strict'

var Router = require('koa-router');
var React = require('react');
var indexRouter = new Router();

import { createStore } from 'redux'
import  counter  from '../app/js/reducer/counterReducer'
import App from '../app/js/app.jsx'
import { Provider } from 'react-redux'



function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="content">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/js/bundle.js"></script>
      </body>
    </html>
    `;
}


const store = createStore(counter);

// Render the component to a string
const html = React.renderToString(
        <App store={store}/>
);

const initialState = store.getState();


indexRouter.get('/', function *() {
    this.body=renderFullPage(html,initialState);

});

module.exports = indexRouter;

