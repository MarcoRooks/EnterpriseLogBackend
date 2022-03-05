const companiesManager = require('../../managers/companiesManager');

function createCompany(req, res) {
    companiesManager.create()
    res.status(200).json("Crear company");
}

module.exports = createCompany