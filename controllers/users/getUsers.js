const usersManager = require('../../managers/usersManager');


function user(req,res){
    const user = usersManager.getUser(req.query.id);

    if (user == false){
        res.status(204).json("Petition not found")
    } else {
        res.status(200).json(user)
    }    
}

module.exports = user
