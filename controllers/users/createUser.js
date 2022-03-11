const usersManager = require('../../managers/usersManager');

async function createUser(req, res) {
    console.log(req.body)

    const created = await usersManager.createUser(req.body);

    if (created == false) {
        res.json(204).json("Petition not found")
    } else {
        res.status(201).json("User created")
    }
}

module.exports = createUser