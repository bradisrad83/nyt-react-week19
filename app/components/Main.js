//Requiring react libraries
var React = require('react');
var Router = require('react-router');

const Main = React.createClass({

  render() {

    return (
//Returns/builds the main page of our application and then calls our children page
      <div className="main-container">
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand">NYT-React-Scrapper</a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#/search">Search</a>
                  </li>
                  <li>
                    <a href="#/saved">Saved Articles</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="jumbotron">
            <h2 className="text-center">Article Search</h2>
          </div>
          {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
