const myClient = require('../managers/connection')
const User = require('../models/User.js')

/* import myClient from "../managers/connection"; */
/* import  User from "../models/User.js" */

class usersManager{

  getAll(){
    const users = myClient.query("SELECT * FROM Users;");
    newUsers = users.map((user) => new User(user));
    myClient.end();
    return newUsers;
  }

  //Esta ingresando username y userpass
  getByLogin(){
    let criterions = {criteria: `${criteria}`,
    key: `username`,
    value: req.params.username,
    nextConcat: `AND`,
    key2: `userpass`,
    value2: req.params.userpass
    };

    const users = myClient.query(`SELECT * FROM Users WHERE ${criterions.key} ${criterions.criteria} ${criterions.value} ${criterions.nextConcat} ${criterions.key2} ${criterions.criteria} ${criterions.value2};`);
    
    myClient.end();
    return users;
  }

  //Dar alta de Nuevo Usuario
  createUser(){
    const {username, email, userpass} = req.body
    
    let newUser = myClient.query(`INSERT INTO users (username, email, userpass) VALUE (${username}, ${email}, ${userpass});`)

    myClient.end()
    return newUser
  }

  mod(){
    const modUser = myClient.query(`UPDATE workers SET 
        name_description = ${name_description}, 
        foto = ${foto}, 
        historial = ${historial}`)

    myClient.end()
    return modUser
  }

}

module.exports = usersManager

