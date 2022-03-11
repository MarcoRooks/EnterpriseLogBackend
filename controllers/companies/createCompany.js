const companiesManager = require('../../managers/companiesManager');

function createCompany(req, res) {
    console.log(req.body)

    const created = companiesManager.createNew(req.body)

    if (created == 'false') {
        res.status(204).json("Opcion no disponible")
    }else{
        res.status(201).json("Creado");
    }
}

module.exports = createCompany