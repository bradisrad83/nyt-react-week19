//This is where all the NYT API information will be stored from
//Exported so that we can use it from the user entered data
var axios = require('axios');

//Variable to store our APIKey
const key = 'a55ac7da34a74cd2bff6d208c01c37e4';

//Variable to store the main site for api searches
const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';


const helpers = {

  runQuery(term, start, end) {

    var term = term.trim();
    var start = `${start.trim()}0101`;
    var end = `${end.trim()}1231`;

    return axios.get(url, {
      params: {
          'api-key': key,
          'q': term,
          'begin_date': start,
          'end_date': end
      }
    })

    .then(results => results.data.response);
  },

  getSaved() {

    return axios.get('/api/saved')
      .then(results => results)
  },

  postSaved(title, date, url) {

    const newArticle = {title, date, url};
    return axios.post('/api/saved', newArticle)
      .then(results => results._id)

  },

  deleteSaved(title, data, url) {

    return axios.delete('/api/saved', {
      params: {
          'title': title,
          'data': data,
          'url': url,
      }
    })
    .then(results => results)
  }

};

export default helpers;
