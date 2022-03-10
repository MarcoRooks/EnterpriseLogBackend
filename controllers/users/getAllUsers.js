const usersManager = require('../../managers/usersManager');

function getAllUsers(req, res) {
    let companies = usersManager.getAll();
    
    if (companies == false) { 
        res.status(204).json("No users") 
    }else {
        res.status(200).json(companies);
    }
    
}

module.exports = getAllUsers