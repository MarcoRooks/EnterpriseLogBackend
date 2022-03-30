const companiesManager = require('../../managers/companiesManager');

function modCompany(req, res) {
    const modified = companiesManager.mod(req.body, req.params.id)

    if (modified == false) {
        res.status(204).json("Petition not available")
    }else{
        res.status(200).json("Modificar company")
    }
}

module.exports = modCompany


//Linea 9, dont know whether to add "modified" in the json