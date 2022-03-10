const {Client} = require('pg');
const connection = require('../managers/connection');
const Workers = require('../models/Worker');

class workersManager{
    
    //brings forward all the workers in the table
    static async getAll(){
        const client = new Client(connection);
        await client.connect()
        const workers = await client.query("SELECT * FROM workers;");
        newWorkers = workers.map((worker) => new Workers(worker));
        await client.end();
        return newWorkers;
    };

    //Brigns workers with one condition
    static async getByID(data){
        const client = new Client(connection);
        await client.connect()
        const workers = await client.query(`SELECT * FROM workers WHERE idworker = '${data.idworker}';`);
        
        await client.end();
        return workers;
    }

    //Create a new Worker
    static async createNew(data){
        const client = new Client(connection);
        await client.connect()
        
        let newWorker = await client.query(`INSERT INTO workers (name_description, photo, record) VALUE ('${data.name_description}', '${data.photo}', '${data.record}');`)

        await client.end()
        return newWorker
        };

        
    static async mod(){
        const client = new Client(connection);
        client.connect()

        const modComp = client.query(`UPDATE workers SET 
            name_description = '${name_description}', 
            photo = '${data.photo}', 
            record = '${data.record}';`);

        client.end()
        return modComp
    };

    static async delete(){
        const client = new Client(connection);
        client.connect()

        const deleteWorker = client.query(`DELETE FROM workers WHERE idcompany = '${idcompany}' AND idworker= '${idworker}' ;`)
    
        client.end()
        return deleteWorker
    };

}


module.exports = workersManager
