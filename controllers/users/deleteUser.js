const usersManager = require('../../managers/usersManager');

function deleteUser(req, res) {
    const deleted = usersManager.deleteUser(req.query.id)

    if (deleted == false){
        res.status(204).json("Petition not found");
    }else{
        res.status(200).json("Deleted user");
    }    
}

module.exports = deleteUser