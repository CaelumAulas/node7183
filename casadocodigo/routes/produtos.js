const mysql = require('mysql')

module.exports = (app) => {
  app.get('/produtos', (req, res) => {
    const connection = mysql.createConnection({
      user: 'root',
      password: '',
      host: 'localhost',
      database: 'casadocodigo2'
    })

    connection.query('SELECT * FROM livros', (error, result) => {
      const livros = result
      res.render('produtos/lista', {livros})
    })
    
    connection.end()

    console.log('URL:', req.url)
    const titulo = 'Listamge de produtos'

  })
}
