const http = require('http')
const ip = '127.0.0.1' //localhost  0.0.0.0
const port = 3000

http.createServer(function(req, res) {
  res.writeHead(201, {'Content-type': 'text/html'})
  res.end('<h1>FOI</h1>')
}).listen(port, ip, function() {
  console.log('Servidor de pé em http://localhost:3000')
  console.log('Pra derrubar o servidor: ctrl + c')
})
