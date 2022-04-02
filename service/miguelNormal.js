const { Client } = require('pg')
const md5 = require('md5')
const User = require('./User');
const Company = require('./Company');
const Workers = require('./Workers');
const md5 = require('md5');
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

async function insertUser(rows = 10) {
    for (let j = 0; j < rows; j++) {
        let newUser = new User();
        const newPass = async (userPass) => { return md5(userPass)};
        const pass = await newPass(newUser.userPass);
        const insert = `INSERT INTO users (name_description, email, avatar, username, userpass, founds) 
        VALUES ('${newUser.name_description}', '${newUser.userEmail}', '${newUser.avatar}', '${newUser.userName}', '${pass}', ${newUser.founds});`
        await client.query(insert);
    }
}

async function selectUser() {
    const select = 'SELECT iduser FROM users;';
    let idUserData = await client.query(select);
    return idUserData.rows
}

async function insertCompany(idUser, rows = 10) {
    for (let j = 0; j < rows; j++) {
        let newCompany = new Company();
        let nowIdUser = idUser[between(0, idUser.length)];
        const columns = 'iduser, name_description, sector, creation_date, logo, webpage, phone_number, social_media, company_description, company_value, num_employees, images';
        const insert = `INSERT INTO companies (${columns}) VALUES ('${nowIdUser.iduser}', '${newCompany.nameDescription}', 
        '${newCompany.sector}', '${newCompany.creationDate}', '${newCompany.logo}', '${newCompany.webpage}', '${newCompany.phoneNumber}', 
        '${newCompany.socialMedia}', '${newCompany.companyDescription}', '${newCompany.companyValue}', '${newCompany.numEmployees}', '${newCompany.images}');`
        await client.query(insert);
    }
}

async function selectCompany() {
    const select = 'SELECT idcompany FROM companies;';
    let idCompanyData = await client.query(select);
    return idCompanyData.rows
}

async function insertWorkers(idCompany, rows = 3) {
    for (let j = 0; j < rows; j++) {
        let newWorkers = new Workers();
        let nowIdCompany = idCompany[between(0, idCompany.length)];
        const columns = 'idcompany, name_description, photo, record';
        const insert = `INSERT INTO workers (${columns}) VALUES ('${nowIdCompany.idcompany}', '${newWorkers.nameDescription}', '${newWorkers.photo}', '${newWorkers.record}');`
        await client.query(insert);
    }
}

async function closed() {
    client.end()
    console.log("End")
}

async function dataLoad() {
    await insertUser();
    const idUser = await selectUser();
    await insertCompany(idUser);
    const idCompany = await selectCompany();
    await insertWorkers(idCompany);
    await closed();
}


const client = new Client(connectionData)
client.connect()

console.log(" active");

dataLoad();

module.exports = dataLoad;