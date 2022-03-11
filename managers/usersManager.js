const myClient = require('../managers/connection')
const User = require('../models/User.js')

/* import myClient from "../managers/connection"; */
/* import  User from "../models/User.js" */

class usersManager {

  getAll() {
    try {
      const users = myClient.query("SELECT * FROM Users;");
      newUsers = users.map((user) => new User(user));
      return newUsers;
    } catch (e) {
      return false
    } finally {
      myClient.end();
    }
  }

  //Esta ingresando username y userpass
  getByLogin() {
    try {
      let criterions = {
        criteria: `${criteria}`,
        key: `username`,
        value: req.params.username,
        nextConcat: `AND`,
        key2: `userpass`,
        value2: req.params.userpass
      };
      const users = myClient.query(`SELECT * FROM Users WHERE 
      ${criterions.key} ${criterions.criteria} 
      ${criterions.value} ${criterions.nextConcat} 
      ${criterions.key2} ${criterions.criteria} ${criterions.value2};`);
      return users;
    } catch (e) {
      return false;
    } finally {
      myClient.end();
    }

  }

  //Dar alta de Nuevo Usuario
  createUser() {
    try {
      const { username, email, userpass } = req.body
      let newUser = myClient.query(`INSERT INTO users (username, email, userpass) VALUE (${username}, ${email}, ${userpass});`)
      return newUser
    } catch (e) {
      return false
    } finally {
      myClient.end()
    }
  }

  mod() {
    try {
      const modUser = myClient.query(`UPDATE workers SET 
      name_description = ${name_description}, 
      foto = ${foto}, 
      historial = ${historial}`)
      return modUser
    } catch (e) {
      return false
    } finally {
      myClient.end()
    }
  }
}

module.exports = usersManager

