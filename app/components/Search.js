//require react library/router
var React = require('react');
var Router = require('react-router');

//requiring Query/results/and helpers(api call)
var Query = require('./Children/Query');
var Results = require('./Children/Results');
var helpers = require('../helpers/helpers');

const Search = React.createClass({

  getInitialState() {
    return {
      queryTerm: "",
      startYear: "",
      endYear: "",
      results: {}
    }
  },

  componentDidUpdate(prevProps, prevState) {


    if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear))
    {
      helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear)

      .then(data => {
        if (data != this.state.results)
        {
          this.setState({
            results: data
          })
        }

      })
    }
  },

  setQuery(newQuery, newStart, newEnd) {

    this.setState({
      queryTerm: newQuery,
      startYear: newStart,
      endYear: newEnd
    })
  },

  render() {

    return(

      <div className="main-container">

        <Query updateSearch={this.setQuery} />

        <Results results={this.state.results}/>

      </div>

    )
  }
});

module.exports = Search;
