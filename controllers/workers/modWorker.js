const workersManager = require('../../managers/workersManager');

function modWorker(req, res) {
    const modified = workersManager.mod();

    if (modified == false) {
        res.status(204).json("Petition not found")
    } else {
        res.status(200).json("Modificar worker")
    }
    
}

module.exports = modWorker