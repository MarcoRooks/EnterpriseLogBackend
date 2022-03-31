const companiesManager = require('../../managers/companiesManager');

async function buyCompany(req, res) {
    const bought = await companiesManager.buyCompany(req.params.userid, req.params.companyid)

    if (bought == 'false') {
        res.status(204).json("Opcion no disponible")
    } else {
        res.status(201).json("Comprada");
    }
}

module.exports = buyCompany