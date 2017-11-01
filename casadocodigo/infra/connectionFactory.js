const mysql = require('mysql')

function connectionFactory() {
  const connection = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'casadocodigo1'
  })

  return connection
}

module.exports = connectionFactory
