const connectionFactory = require('../infra/connectionFactory')
const LivroDao = require('../dao/LivroDao')

module.exports = (app) => {
  app.get('/produtos', (req, res) => {
    const connection = connectionFactory()
    const livroDao = new LivroDao(connection)

    livroDao.getAll((error, result) => {
      const livros = result

      res.render('produtos/lista', {livros})
    })
  })
}
