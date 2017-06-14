var express = require('express');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');

//exporting all of our routes to be used through the application
module.exports = function(app) {
  app.get('/', (req, res) => {
    console.log("hitting");
    res.sendFile('../../public/index.html');
  })

  app.get('/api/saved', (req, res) => {

    Article.find({}).exec((err, doc) => {

      if (err) {
        console.log(err);
      } else {
        res.send(doc);
      }
    })
  });

  app.post('/api/saved', (req, res) => {
    const newArticle = new Article(req.body);

    const title = req.body.title;
    const date = req.body.date;
    const url = req.body.url;

    newArticle.save((err, doc) => {
      if (err) {
        console.log(err);
      } else {
        res.send(doc._id);
      }
    });
  });

  app.delete('/api/saved/', (req, res) => {

    const url = req.param('url');

    Article.find({"url": url}).remove().exec((err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Deleted");
      }
    });
  });
}
