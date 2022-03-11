const usersManager = require('../../managers/usersManager');

function getAllUsers(req, res) {
    let users = usersManager.getAll();
    
    if (companies == false) { 
        res.status(204).json("No users") 
    }else {
        res.status(200).json(users);
    }  
}

module.exports = getAllUsers