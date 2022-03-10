const companiesManager = require('../../managers/companiesManager');

function createCompany(req, res) {
    const created = companiesManager.create()

    if (created == 'false') {
        res.status(204).json("Opcion no disponible")
    }else{
        res.status(201).json("Creado");
    }
}

module.exports = createCompany