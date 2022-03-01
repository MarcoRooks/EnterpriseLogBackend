function user(req,res){
    /* let criterions = {criteria: `=`,
        key: `username`,
        value: req.params.username,
        nextConcat: `AND`,
        key2: `userpass`,
        value2: req.params.userpass
    };

    const users = usersManager.getByLogin(criterions);
    changeUsers(users) */
    res.status(200).json("users")
}

module.exports = user