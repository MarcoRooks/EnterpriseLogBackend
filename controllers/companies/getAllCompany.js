const companiesManager = require('../../managers/companiesManager');

async function getAllCompany(req, res) {
    //console.log(companiesManager)
    const bringAll = await companiesManager.getAll()

    if (bringAll == false) {
        res.status(204).json("Petition failed")
    }else{
        res.status(200).json(bringAll);
    }   
}

module.exports = getAllCompany;