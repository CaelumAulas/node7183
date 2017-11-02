module.exports = (app) => {
  app.get('/produtos', (req, res) => {
    const connection = app.infra.connectionFactory()
    const livroDao = new app.dao.LivroDao(connection)

    livroDao.getAll((error, result) => {
      const livros = result

      res.format({
        html: () => {
          res.render('produtos/lista', {livros})
        },
        json: () => {
          res.json(livros)
        }
      })
    })
  })

  app.get('/produtos/form', (req, res) => {
    res.render('produtos/form')
  })

  app.post('/produtos', (req, res) => {
    const livro = req.body
    const connection = app.infra.connectionFactory()
    const livroDao = new app.dao.LivroDao(connection)

    livroDao.save(livro, (error, result) => {
      res.redirect('/produtos')
    })
  })
}
