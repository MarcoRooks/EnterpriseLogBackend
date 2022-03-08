const companiesManager = require('../../managers/companiesManager');

function getCompany(req, res) {
    companiesManager.getByID();
    res.status(200).json("Get company");
}

module.exports = getCompany