function createWorker(req, res) {
    workersManager.createNew()
    res.status(200).json("Crear worker")
}

module.exports = createWorker