//Requiring react libraries and react router
var React = require('react');
var Router = require('react-router');

//requring our helpers (API call)
var helpers = require('../../helpers/helpers');

const Results = React.createClass({

  getInitialState() {
    return {title: "", url: "", pubdate: ""}
  },

  handleClick(item, event) {

    helpers.postSaved(item.headline.main, item.pub_date, item.web_url).then(data => {})

  },

  render() {

    if (!this.props.results.hasOwnProperty('docs')) {

      return (

        <li className="list-group-item"></li>

      )

    } else {
      var articles = this.props.results.docs.map((article, index) => <div key={index}>
        <li className="list-group-item">

          <h3>
            <span>
              <em>{article.headline.main}</em>
            </span>
            <span className="btn-group pull-right">
              <a href={article.web_url} target="_blank">
                <button className="btn btn-default ">View Article</button>
              </a>

              <button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Save</button>
            </span>
          </h3>
          <p>Date Published: {article.pub_date}</p>

        </li>

      </div>)

    }

    return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">sResults</h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">

                  {articles}

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    )

  }

});

export default Results;
