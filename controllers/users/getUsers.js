/* const data = require(); */

function userID(req,res){
    const users = usersManager.getAll();
    changeUsers(users)
    res.json(users)
}

module.exports = userID