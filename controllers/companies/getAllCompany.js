const companiesManager = require('../../managers/companiesManager');

function getAllCompany(req, res) {
    const bringAll = companiesManager.getAll()

    if (bringAll == false) {
        res.status(204).json("Petition failed")
    }else{
        res.status(200).json(bringAll);
    }
    
}

module.exports = getAllCompany;