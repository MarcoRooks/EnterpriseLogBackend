const companiesManager = require('../../managers/companiesManager');

async function getCompanyByItId(req, res) {
    const company = await companiesManager.getByIDCompany(req.params.id);

    if (company == false) {
        res.status(204).json("Company not found")
    } else {
        res.status(200).json(company);
    }

}

module.exports = getCompanyByItId