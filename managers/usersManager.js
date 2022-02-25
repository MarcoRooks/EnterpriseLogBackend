/* Import model to create the objecct, 
import the client */
import client from "../managers/connection.js";

class usersManager{

  /* getAll(){
    const users = client.query("SELECT * FROM Users;");
    newUsers = users.map((user) => new User(user));
    client.end();
    return newUsers;
  } */

  //Esta ingresando username y userpass
  getByLogin(criterions){
    const users = client.query(`SELECT * FROM Users WHERE ${criterions.key} ${criterions.criteria} ${criterions.value} ${criterions.nextConcat} ${criterions.key2} ${criterions.criteria} ${criterions.value2};`);
    newUsers = users.map((user) => new User(user));
    client.end();
    return newUsers;
  }

  //Dar alta de Nuevo Usuario
  createUser(){
    const {username, email, userpass} = req.body
    
    let newUser = client.query(`INSERT INTO users (username, email, userpass) VALUE (${username}, ${email}, ${userpass});`)
    client.end()
    return newUser
  }

}

let criterions = {criteria: `${criteria}`,
key: `${key}`,
value: `${value}`,
nextConcat: `${nextConcat}`} 
