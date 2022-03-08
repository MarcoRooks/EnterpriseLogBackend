const workersManager = require('../../managers/workersManager');

function getWorker(req, res) {
    workersManager.getByID()
    res.status(200).json("Get worker")
}

module.exports = getWorker