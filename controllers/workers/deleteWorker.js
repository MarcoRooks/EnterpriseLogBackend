const workersManager = require('../../managers/workersManager');

function deleteWorker(req, res) {
    const deleted = workersManager.delete(req.param.id)

    if (deleted == false) {
        res.status(204).json("Petition not found")
    } else {
        res.status(200).json("Worker has been deleted")
    }  
}

module.exports = deleteWorker