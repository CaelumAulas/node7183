const mysql = require('mysql')

function connectionFactory() {
  const connection = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'casadocodigo2'
  })

  return connection
}

module.exports = () => connectionFactory
