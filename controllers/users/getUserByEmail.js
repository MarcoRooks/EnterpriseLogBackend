const usersManager = require('../../managers/usersManager');
const User = require('../../models/User');


async function getuserByEmail(req, res) {
    const user = await usersManager.getByLoginEmail(req.body);
    const result = {
        username: user.userName,
        email: user.userEmail,
        id: user.iduser,
        userpass: user.userPass,
        founds: user.founds
    }
    if (user == false) {
        res.status(204).json("Petition not found")
    } else {
        res.status(200).json(result)
    }
}

module.exports = getuserByEmail