const usersManager = require('../../managers/usersManager');

function createUser(req, res) {
    const created = usersManager.createUser();

    if(created == false){
        res.json(204).json("Petition not found")
    }else{
        res.status(201).json("User created")
    }
}

module.exports = createUser