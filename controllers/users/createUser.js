const client = require('../../managers/connection');

function createUser(req, res) {
    
    res.status(200).json("Crear usuario")
}

module.exports = createUser