const { Client } = require('pg')
const User = require ('./User');
const Company = require ('./Company');
//const config = require('../config.js');


const delay = ms => new Promise(resolve => setTimeout(resolve, ms)) //sleep

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'enterprise',
    password: '1234',
    port: 5432,
}

function between(min, max) {  
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

async function insertUser(rows=10) {
    for (let j = 0; j < rows; j++) {
        let newUser = new User();
        //await delay(1000);
        const insert = `INSERT INTO users (name_description, email, avatar, username, userpass) VALUES ('${newUser.name_description}', '${newUser.userEmail}', '${newUser.avatar}', '${newUser.userName}', ${newUser.userPass});`
        await client.query(insert);
    }
}

async function selectUser(){
    const select = 'SELECT iduser FROM users;';
    let idUserData = await client.query(select);
    console.log(idUserData.rows);
    return idUserData.rows
}

async function insertCompany(idUser, rows=10){
    for (let j = 0; j < rows; j++) {
        let newCompany = new Company();
        await delay(1000);
        console.log(newCompany);
        let nowIdUser = idUser[between(0, idUser.length)];
        const columns = 'iduser, name_description, sector, creation_date, logo, webpage, phone_number, social_media, company_description, company_value, num_employees, images'; 
        let values = '';
        const insert = `INSERT INTO companies (${columns}) VALUES ('${nowIdUser}', '${newCompany.nameDescription}', '${newCompany.sector}', '${newCompany.creationDate}', '${newCompany.logo}', '${newCompany.webpage}', '${newCompany.phoneNumber}', '${newCompany.socialMedia}', '${newCompany.companyDescription}', '${newCompany.companyValue}', '${newCompany.numEmployees}', '${newCompany.images}');`
        await client.query(insert);
    }

}

async function closed(){
    client.end()
    console.log("End")
}

async function dataLoad() {
    //await insertUser();
    const idUser = await selectUser();
    await insertCompany(idUser);
    await closed();
}


const client = new Client(connectionData)
client.connect()
 
console.log(" active");

dataLoad();

module.exports = dataLoad;