const usersManager = require('../../managers/usersManager');


function user(req,res){
    const user = usersManager.getByLogin(req.query.email, req.query.password);

    if (user == false) {
        res.status(204).json("Petition not found")
    } else {
        res.status(200).json(user)
    }
}

module.exports = user