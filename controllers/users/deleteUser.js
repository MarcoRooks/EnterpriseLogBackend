const usersManager = require('../../managers/usersManager');

function deleteUser(req, res) {
    res.status(200).json("delete user");
}

module.exports = deleteUser