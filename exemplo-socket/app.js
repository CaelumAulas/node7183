const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const port = 8080

app.set('view engine', 'ejs')
app.set('io', io)

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.render('socket')
})

app.get('/vai', (req, res) => {
  app.get('io').emit('vai', req.url)
  res.send('vai')
})

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)
  })
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://locahost:${port}`)
  console.log('Pra desligar o servidor: ctrl + c')
})
