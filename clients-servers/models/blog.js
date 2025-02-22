const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type:String,
    require: true
  },
  Snippet: {
    type:String,
    require:true
  },
  body:{
    type:String,
    require:true
  }
}, {timestamps:true});

const Blog = mongoose.model('blog', blogSchema)
module.exports = Blog;