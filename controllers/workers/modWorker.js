function modWorker(req, res) {
    workersManager.mod()
    res.status(200).json("Modificar worker")
}

module.exports = modWorker