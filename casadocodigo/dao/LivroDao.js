class LivroDao {
  constructor(connection) {
    this.connection = connection
  }

  getAll(callback) {
    // this._connection.query('SELECT * FROM livros', (error, result) => {
    //   callback(error, result)
    // })

    this.connection.query('SELECT * FROM livros', callback)

    this.connection.end()
  }
}

module.exports = LivroDao
