require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT

app.set('view engine', 'ejs')
app.use(express.static('./assets'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/msg', (req, res) => {
  res.send(req.body.msg)
})

app.listen(port, () => {
  console.log(`Servidor de pé em http://locahost:${port}`)
  console.log('Pra desligar o servidor: ctrl + c')
})
