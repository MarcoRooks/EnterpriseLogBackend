const companiesManager = require('../../managers/companiesManager');

function deleteCompany(req, res) {
    const deleted =companiesManager.delete()

    if (deleted == false){
        res.status().json("petition failed")
    }else{
        res.status(200).json("Company has been deleted")
    }
    
}

module.exports = deleteCompany