const usersManager = require('../../managers/usersManager');

function getAllUsers(req, res) {
    let answer = getAll();
    if (answer == []){ 
        res.status(201).json("No users") 
    }else {
        res.status(200).json({data: answer});
    }
    
}

module.exports = getAllUsers