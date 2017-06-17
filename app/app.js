var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var main = require ('./components/Main');
var routes = require('./routes/react-routes');

ReactDOM.render(main, document.getElementById('app'));
