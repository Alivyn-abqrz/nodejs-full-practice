const http = require('http');
const PORT = 3002;

const server = http.createServer((req, res) => {
  console.log(`request made ${req}`)
});

server.listen(PORT, 'localhost', () =>{
  console.log('listening for requests on port 3002')
})