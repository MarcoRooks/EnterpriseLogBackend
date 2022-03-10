const {Client} = require("pg")
const connection = require('../managers/connection')
const User = require('../models/User.js')



class usersManager{

  static async getAll(){
    const client = new Client(connection);
    await client.connect()
    const users = await client.query("SELECT * FROM users;");
    newUsers = users.map((user) => new User(user));
    await client.end();
    return newUsers;
  }

  static async getUser(data){
    const client = new Client(connection);
    await client.connect()
    const user = await client.query(`SELECT * FROM users WHERE iduser = '${data.iduser}'`)
  }

  //Esta ingresando username y userpass
  static async getByLogin(data){
    const client = new Client(connection);
    await client.connect()

    const users = await client.query(`SELECT * FROM users WHERE username = '${data.username}' AND userpass = '${data.userpass}';`);
    
    await client.end();
    return users;
  }

  //Dar alta de Nuevo Usuario
  static async createUser(data){
    const client = new Client(connection);
    await client.connect()
    
    let newUser = await client.query(`INSERT INTO users (username, email, userpass) VALUE ('${data.username}', '${data.email}', '${data.userpass}');`)

    await client.end()
    return newUser
  }

  static async mod(data){
    const client = new Client(connection);
    await client.connect()
    const modUser = await client.query(`UPDATE users SET 
        name_description = '${data.name_description}', 
        avatar = '${data.avatar}' ;`)

    await client.end()
    return modUser
  }

}

module.exports = usersManager

