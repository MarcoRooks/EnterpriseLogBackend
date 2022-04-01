const usersManager = require('../../managers/usersManager');


function modUserCredit(req, res) {
    const modified = usersManager.modCredit(req.body.finalfounds, req.params.id)

    if (modified == false) {
        res.status(204).json("Petition not found");
    } else {
        res.status(200).json("Modified User");
    }
     
}

module.exports = modUserCredit