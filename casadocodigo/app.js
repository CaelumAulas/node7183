const express = require('express')
const app = express()
const ip = 'localhost'
const port = 3001

app.set('view engine', 'ejs')

app.get('/produtos', (req, res) => {
  console.log('URL:', req.url)
  const titulo = 'Listamge de produtos'
  res.render('produtos/lista', { title: titulo })
})

app.listen(port, () => {
  console.log('Servidor de pé em ' +
  'http://localhost' + ip + ':' + port)
  console.log(`Servidor de pé em http://${ip}:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
