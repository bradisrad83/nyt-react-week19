//ES6  of 'require'
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Creates a new schema for Articles from the NYTimes
const ArticleSchema = new Schema ({
  title: {
    type: String,
  },
  date: {
    type: Date,
  },
  url: {
    type: String,
  }
});

const Article = mongoose.model('Article', ArticleSchema);
//Exports the Article schema for use throughout the rest of the application
//ES6 of module.exports
export defualt Article;
