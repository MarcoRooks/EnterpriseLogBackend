const { Client } = require('pg')
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

try {
    client.query(`DROP TABLE companies;`);
    console.log("drop")
} catch (error) {
    console.log(error)
}

/* try {
    client.query(`CREATE TABLE companies (
        idcompany uuid, 
        iduser uuid, 
        name_description varchar(255), 
        sector varchar(255), 
        creation_date varchar(255), 
        logo varchar(255), 
        webpage varchar(255), 
        phone_number int, 
        social_media varchar(255), 
        company_description varchar(255), 
        company_value money, 
        num_employees int, 
        images varchar(255), 
        time_modification varchar(255), 
        CONSTRAINT PK_companies PRIMARY KEY (idcompany), 
        FOREIGN KEY (iduser) REFERENCES users(iduser)
    )`);
    console.log("created")
} catch (error) {
    console.log(error) */

// client.end()