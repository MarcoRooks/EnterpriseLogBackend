const companiesManager = require('../../managers/companiesManager');

async function getCompanybyName(req, res) { 
    const params = req.params.name_description.replace('%20',' ')
    const company = await companiesManager.getByName(params);
   

    if (company == false) {
        res.status(204).json("Company not found")
    } else {
        res.status(200).json(company);
    }

}

module.exports = getCompanybyName