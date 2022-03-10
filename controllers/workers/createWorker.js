const workersManager = require('../../managers/workersManager');

function createWorker(req, res) {
    const created = workersManager.createNew()

    if (created == false){
        res.status(204).json("Petition not found")
    } else {
        res.status(200).json("New worker created")
    }
    
}

module.exports = createWorker