const companiesManager = require('../../managers/companiesManager');

function getCompany(req, res) {
    const company = companiesManager.getByID(req.query.id);

    if (company == false) {
        res.status(204).json("Company not found")
    }else {
        res.status(200).json(company);
    }
    
}

module.exports = getCompany