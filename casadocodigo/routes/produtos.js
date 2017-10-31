module.exports = (app) => {
  app.get('/produtos', (req, res) => {
    console.log('URL:', req.url)
    const titulo = 'Listamge de produtos'
    res.render('produtos/lista', { title: titulo })
  })
}
