/**
 * Created by Izzy on 28/02/15.
 */
'use strict'

var Router = require('koa-router');
var React = require('react');
var index = React.createFactory(require('../views/index'));
var indexRouter = new Router();

indexRouter.get('/', function *() {
    this.body=React.renderToString(
        index()
    );

});

module.exports = indexRouter;

