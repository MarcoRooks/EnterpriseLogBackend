const workersManager = require('../../managers/workersManager');

function createWorker(req, res) {
    workersManager.createNew()
    res.status(200).json("Crear worker")
}

module.exports = createWorker