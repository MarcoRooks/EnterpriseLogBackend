function getAllWorkers(req, res) {
    workersManager.getAll()
    res.status(200).json("Get all workers")
}

module.exports = getAllWorkers