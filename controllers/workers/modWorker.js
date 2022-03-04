const client = require('../../managers/connection');

function modWorker(req, res) {
    workersManager.mod()
    res.status(200).json("Modificar worker")
}

module.exports = modWorker