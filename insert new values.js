const { Client } = require('pg')
const { v4: uuidv4 } = require('uuid');
/* const {User} = require('../EnterpriseLogBackend/models/User') */
const User = require ('../EnterpriseLogBackend/service/User');


const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'enterprise',
    password: '1234',
    port: 5432,
}

const client = new Client(connectionData)
client.connect()
 
console.log(" active");

/* const newUser = new User(req.query.uuidv4()) */
const newUser = new User();
console.log("new user:", newUser.iduser, newUser.name_description, newUser.userEmail, newUser.userName, newUser.avatar, newUser.userPass)
console.log("new user:", newUser.name_description);

try {
    client.query(`INSERT INTO users (iduser, name_description, email, avatar, username, userpass) VALUES (${newUser.iduser}, ${newUser.name_description}, ${newUser.userEmail}, ${newUser.avatar}, ${newUser.userName}, ${newUser.userPass});`);
    client.end()
    console.log("drop")
} catch (error) {
    console.log("la vagaste",error)
}