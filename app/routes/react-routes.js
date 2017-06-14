//Include react library/router module
var React = require('react');
var router = require('react-router');

// Include the Route component for displaying individual routes
const Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
const Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
const hashHistroy = router.hashHistroy;

//Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

//Includeing the components main/search/Saved
var Main = require('../components/Main');
var Search = require('../components/Search');
var Saved = require('../components/Saved');

export default (
  <Route path='/' component={Main}>


  </Route>
);
