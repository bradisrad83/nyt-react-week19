var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var Main = require ('./components/Main');
var Routes = require('./routes/react-routes');

ReactDOM.render(<Main />, document.getElementById('app'));
