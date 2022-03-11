const { Client } = require("pg")
const connection = require('../managers/connection');
const User = require("../models/User.js");



class usersManager {

  static async getAll() {

    const client = new Client(connection);
    await client.connect();

    try {
      const users = await client.query("SELECT * FROM users;");
      newUsers = users.map((user) => new User(user));
      return newUsers;
    } catch (e) {
      return false;
    } finally {
      await client.end();
    }
  }

  static async getUser(data) {

    const client = new Client(connection);
    await client.connect()

    try {
      const user = await client.query(`SELECT * FROM users WHERE iduser = '${data.iduser}'`);
      return user;
    } catch (e) {
      return false;
    } finally {
      await client.end()
    }

  }

  //Esta ingresando username y userpass
  static async getByLogin(data) {

    const client = new Client(connection);
    await client.connect();

    try {
      const users = await client.query(`SELECT * FROM users WHERE username = '${data.username}' AND userpass = '${data.userpass}';`);
      return users;
    } catch (e) {
      return false;
    } finally {
      await client.end();
    }

  }

  //Dar alta de Nuevo Usuario
  static async createUser(data) {

    const client = new Client(connection);
    await client.connect()

    const user = new User(data);

    try {
      let newUser = await client.query(`INSERT INTO users (iduser, name_description, email, avatar, username, userpass) VALUES ('${user.iduser}', '${user.name_description}', '${user.userEmail}', '${user.avatar}', '${user.userName}', '${user.userPass}');`);
      return user
    } catch (e) {
      console.log("ERROR PRESENTED:", e)
      return false;
    } finally {
      await client.end()
    }

  }

  static async mod(data) {

    const client = new Client(connection);
    await client.connect()

    try {
      const modUser = await client.query(`UPDATE users SET 
        name_description = '${data.name_description}', 
        avatar = '${data.avatar}' ;`);
      return modUser;
    } catch (e) {
      return false;
    } finally {
      await client.end()
    }

  }
}

module.exports = usersManager

