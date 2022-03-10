const usersManager = require('../../managers/usersManager');


function modUser(req, res) {
    const modified = usersManager.mod()

    if (modified == false) {
        res.status(204).json("Petition not found");
    } else {
        res.status(200).json("Modified User")
    }
     
}

module.exports = modUser