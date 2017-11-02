module.exports = function() {
  const express = require('express')
  const bodyParser = require('body-parser')
  const load = require('express-load')
  const app = express()

  app.set('view engine', 'ejs')

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(express.static('./public'))

  load('infra')
      .then('dao')
      .then('routes')
      .then('errorStatusHttp')
      .into(app)

  return app
}
