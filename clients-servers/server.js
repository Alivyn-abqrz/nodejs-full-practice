const http = require('http');
const PORT = 3002;
const fs = require('fs');
 
const server = http.createServer((req, res) => {
  console.log(`request made ${req.url} ${req.method}`);
  res.setHeader('Content-Type', 'text/html');
   let path = './views/';
   if (req.url === '/'){
    path += 'index.html'
    res.statusCode = 202;
   }else if (req.url === '/about'){
    path += 'about.html'
    res.statusCode = 200;
   }else if (req.url === '/about-me'){
    res.statusCode = 301;
    res.getHeader('Location', '/about');
    res.end();
    return
   }else {
    path += '404.html'
    res.statusCode = 404;
   }

  // send an html file
  fs.readFile(path, (err, data) => {
        if(err){
          console.log(err);
          res.statusCode = 500;
          res.end('<h1>Internal Server Error! </h1>')
          return
        }
        res.end(data);
  });

  // res.write('<head <link rel="stylesheet" src="#"> </head>');
  // res.write(`<h1> Hello! ${PORT} </h1>`);
  // res.write(`<p> Hello! User </p>`);
  // res.end();
});

server.listen(PORT, 'localhost', () =>{
  console.log('listening for requests on port 3002')
})