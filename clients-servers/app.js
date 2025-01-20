const express = require('express');
const app = express();
const ejs = require('ejs')
const PORT = 8080;

// register view engine
app.set('view engine', 'ejs')
// Listen for request
app.listen(PORT)
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', {root: __dirname});
});
app.get('/about', (req, res) =>{
  res.sendFile('views/about.html', {root:__dirname})
});

// redirecting
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})
// 404 page
app.use((req, res)=>{
  res.sendFile('views/404.html', {root:__dirname})
})