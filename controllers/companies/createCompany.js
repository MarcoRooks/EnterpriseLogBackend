const companiesManager = require('../../managers/companiesManager');

async function createCompany(req, res) {
    console.log(req.body)

    const created = await companiesManager.createNew(req.body)

    if (created == 'false') {
        res.status(204).json("Opcion no disponible")
    } else {
        res.status(201).json("Creado");
    }
}

module.exports = createCompany