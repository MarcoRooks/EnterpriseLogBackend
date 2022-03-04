const client = require('../../managers/connection')

function createUser(req, res) {
    const user = req.body
    console.log(user)
    client.query('INSERT INTO users (username, email, userpass, name_description) VALUE()')
    res.status(200).json("Crear usuario")
}

module.exports = createUser