const workersManager = require('../../managers/workersManager');

function deleteWorker(req, res) {
    workersManager.delete()
    res.status(200).json("delete worker")
}

module.exports = deleteWorker