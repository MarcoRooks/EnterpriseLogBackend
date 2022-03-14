const usersManager = require('../../managers/usersManager');
const User = require('../../models/User');


async function user(req, res) {
    const user = await usersManager.getByLogin(req.body);
    const result = {
        username: user.userName,
        email: user.userEmail,
        id: user.iduser
    }

    if (user == false) {
        res.status(204).json("Petition not found")
    } else {
        res.status(200).json(result)
    }
}

module.exports = user