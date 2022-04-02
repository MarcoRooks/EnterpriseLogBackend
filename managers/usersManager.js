const { Client } = require("pg")
const connection = require('../managers/connection');
const User = require("../models/User.js");



class usersManager {

  // get to list all registered users
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

  // get to obtain user data by id
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

 //post for login with username
  static async getByLogin(data) { 

    const client = new Client(connection);
    await client.connect();

    try {
      const users = await client.query(`SELECT * FROM users WHERE username = '${data.username}';`);
      const theUser = new User(users.rows[0]);
      if (data.userpass === users.rows[0].userpass){
        return theUser;
      }
      else {
            return('wrong password');
      }
    } 
    catch (e) {
      return false;
    } 
    finally {
      await client.end();
    }
  }

//post for login with email

  static async getByLoginEmail(data) { 
    const client = new Client(connection);
    await client.connect();

    try {
      const users = await client.query(`SELECT * FROM users WHERE email = '${data.email}';`);
      const theUser = new User(users.rows[0]);
      if (data.userpass === users.rows[0].userpass){
        return theUser;
      }
      else {
            return('wrong password');
      }
    } 
    catch (e) {
      return false;
    } 
    finally {
      await client.end();
    }

  }

  //post for register a new user
  static async createUser(data) {

    const client = new Client(connection);
    await client.connect()

    const user = new User(data);

    try {
      let newUser = await client.query(`INSERT INTO users (iduser, name_description, email, avatar, username, userpass, founds) VALUES ('${user.iduser}', '${user.name_description}', '${user.userEmail}', '${user.avatar}', '${user.userName}', '${user.userPass}',${user.founds});`);
      return user
    } catch (e) {
      console.log("ERROR PRESENTED:", e)
      return false;
    } finally {
      await client.end()
    }

  }
// modify a registered user
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


// modify a credit user
  static async modCredit(finalfounds,iduser) {
    const client = new Client(connection);
    await client.connect()

    try {
      const modUser = await client.query(`UPDATE users SET founds = ${finalfounds} where iduser = '${iduser}';`);
      return modUser;
    } catch (e) {
      return false;
    } finally {
      await client.end()
    }

  }
}

module.exports = usersManager

