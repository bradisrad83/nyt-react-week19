var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var routes = require('../server/routes');

ReactDOM.render(routes, document.getElementById('app'));
