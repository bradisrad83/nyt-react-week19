//Include react library/router module
var React = require('react');
var Router = require('react-router');

// Include the Route component for displaying individual routes
//const Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Route = Router.Route;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistroy = Router.hashHistroy;

//Include the IndexRoute (catch-all route)
var IndexRoute = Router.IndexRoute;

//Includeing the components main/search/Saved
var Main = require('../components/Main');
var Search = require('../components/Search');
var Saved = require('../components/Saved');

module.exports = function(){
  <Route path='/' component={Main}>

    <Route path='Search' component={Search}/>
    <Route path='Saved' component={Saved}/>

    <IndexRoute component={Search}/>

  </Route>
}
