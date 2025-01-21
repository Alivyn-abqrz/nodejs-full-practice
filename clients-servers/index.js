const express = require('express');
const app = express();
const ejs = require('ejs')
const PORT = 5000;
const morgan = require('morgan')
const dbUrl = 'mongodb+srv://<db_username>:<db_password>@cluster0.lxoui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// register view engine
app.set('view engine', 'ejs');

// Listen for request
app.listen(PORT)
// morgan app
app.use(morgan('dev'))

//middle ware & static files
app.use(express.static('public')) 

app.get('/', (req, res) => {
  const anime = [
    {title: 'Hero Academia', name: 'Midurya Isuku', power: 'One for All' },
    {title: 'Dragon ball', name: 'guko chan', power: 'super sience'},
    {title: 'One piece', name:'Monkey D Lupin', 
      power:'rubber man'
    }
  ]
  res.render('index', {title: 'home', anime})
});
app.get('/about', (req, res) =>{
  res.render('about', {title: 'about'})
});
app.get('/blog/create', (req, res) =>{
  res.render('create', {title: 'create'})
});
// redirecting
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})
// 404 page
app.use((req, res)=>{
res.status(404).render('404', {title: 404})
})