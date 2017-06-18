//require react libraries/router
var React = require('react');
var Router = require('react-router').router;

//requiring helpers (API call)
var helpers = require ('../helpers/helpers');

const Saved = React.createClass({

  getInitialState() {
    return {
      savedArticles: ""
    }
  },

  componentDidMount() {

    helpers.getSaved()
      .then(articleData => {
        this.setState({
          savedArticles: articleData.data
        });

      })
  },

  handleClick(item, event) {

    helpers.deleteSaved(item.title, item.date, item.url)
      .then(data => {

      helpers.getSaved()
        .then(articleData => {
          this.setState({
            savedArticles: articleData.data
          });

        })



      })
  },

  render() {

    if (this.state.savedArticles == "") {
      return(

        <li className="list-group-item">
          <h3>
              <span>You do not have any saved articles</span>
          </h3>
        </li>

      )
    }

    else {

      var articles = this.state.savedArticles.map((article, index) => <div key={index}>

        <li className="list-group-item" >

          <h3>
            <span><em>{article.title}</em></span>
            <span className="btn-group pull-right" >
              <a href={article.url} target="_blank"><button className="btn btn-default ">View Article</button></a>
              <button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Delete</button>
            </span>
          </h3>
          <p>Date Published: {article.date}</p>

        </li>

      </div>)

    }

    return(

      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">Saved Articles</h1>
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

module.exports =Saved;
