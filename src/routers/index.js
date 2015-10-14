/**
 * Created by Izzy on 28/02/15.
 */
'use strict';

var Router = require('koa-router');
var React = require('react');
var indexRouter = new Router();
import { Map } from 'immutable'

import { createStore } from 'redux'
import  counter  from '../app/js/reducer/counterReducer'
import App from '../app/js/app.jsx'
import { Provider } from 'react-redux'
import renderFullPage from '../serverRendering/renderFullPage'


/*  This is how to set initial state from the server and the client will read it after first render
    const initialState = Map({count:10});
    const store = createStore(counter,initialState);
*/
const store = createStore(counter);
const initialState = store.getState();

// Render the component to a string
const html = React.renderToString(
        <App store={store}/>
);



indexRouter.get('/', function *() {
    this.body=renderFullPage(html,initialState);

});

module.exports = indexRouter;

