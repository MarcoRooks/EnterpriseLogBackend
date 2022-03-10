const workersManager = require('../../managers/workersManager');

function getWorker(req, res) {
    const worker = workersManager.getByID()

    if (worker == false) {
        res.status(204).json("Petition not found")
    } else {
        res.status(200).json(worker)
    }
    
}

module.exports = getWorker