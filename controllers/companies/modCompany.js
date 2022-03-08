const companiesManager = require('../../managers/companiesManager');

function modCompany(req, res) {
    companiesManager.mod()
    res.status(200).json("Modificar company")
}

module.exports = modCompany