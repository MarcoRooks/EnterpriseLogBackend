const workersManager = require('../../managers/workersManager');

function getAllWorkers(req, res) {
    const bringAll = workersManager.getAll();

    if (bringAll == false) {
        res.status(204).json("Petition not found")
    } else {
        res.status(200).json(bringAll)
    }
    
}

module.exports = getAllWorkers