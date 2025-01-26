const express = require('express');
const app = express();
const ejs = require('ejs')
const PORT = 5001;
const morgan = require('morgan')
const mongoose = require('mongoose')
const username = 'alvivyn';
const password = encodeURIComponent("abarquez321");
const blogRouter = require('./routes/blogRoutes')
// connect to mongoDb
const dbUrl = `mongodb+srv://${username}:${password}@firstcluster.lxoui.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster`
mongoose.connect(dbUrl)
.then((result)=>{
  app.listen(PORT)
})
.catch((err) => {
  console.log(err)
})


// register view engine
app.set('view engine', 'ejs');

// morgan app
app.use(morgan('dev'))

//middle ware & static files
app.use(express.static('public')) ;
// for post data
app.use(express.urlencoded({extended: true}));

// blog routes
app.use('/blogs',blogRouter);

// routes
app.get('/', (req, res)  => {
  res.redirect('blogs')
})

app.get('/about', (req, res) =>{
  res.render('about', {title: 'about'})
});
// redirecting
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})
// 404 page
app.use((req, res)=>{
res.status(404).render('404', {title: 404})
})