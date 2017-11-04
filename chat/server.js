require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const port = process.env.PORT

app.set('view engine', 'ejs')
app.set('io', io)
app.use(express.static('./assets'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/msg', (req, res) => {
  app.get('io').emit('msg', req.body)
  res.send(req.body.msg)
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://locahost:${port}`)
  console.log('Pra desligar o servidor: ctrl + c')
})
