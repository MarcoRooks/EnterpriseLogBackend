const usersManager = require('../../managers/usersManager');

async function createUser(req, res) {

    if (req.body.userName === null || req.body.userEmail === null || req.body.userPass === null) {
        return res.status(204).json("Petition not found")
    }

    const created = await usersManager.createUser(req.body);

    const response = {
        iduser: created.iduser,
        userName: created.userName,
        userEmail: created.userEmail,
    }

    if (created == false) {
        res.status(204).json("Petition not found")
    } else {
        res.status(201).json(response)
    }
}

module.exports = createUser