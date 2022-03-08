const companiesManager = require('../../managers/companiesManager');

function deleteCompany(req, res) {
    companiesManager.delete()
    res.status(200).json("delete company")
}

module.exports = deleteCompany