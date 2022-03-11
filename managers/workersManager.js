const { Client } = require('pg');
const connection = require('../managers/connection');
const Workers = require('../models/Worker');

class workersManager{
    
    //brings forward all the workers in the table
    static async getAll(){

        const client = new Client(connection);
        await client.connect()

        try{
            const workers = await client.query("SELECT * FROM workers;");
            newWorkers = workers.map((worker) => new Workers(worker));
            return newWorkers;
        } catch (e) {
            return false;
        } finally {
            await client.end();
        }
        
    };

    //Brigns workers with one condition
    static async getByID(data){
        const client = new Client(connection);
        await client.connect()

        try{
            const workers = await client.query(`SELECT * FROM workers WHERE idworker = '${data.idworker}';`);
            return workers;
        } catch (e) {
            return false;
        } finally {
            await client.end();
        }
        
    }

    //Create a new Worker
    static async createNew(data){
        const client = new Client(connection);
        await client.connect()
        
        try{
            let newWorker = await client.query(`INSERT INTO workers (name_description, photo, record) VALUES ('${data.name_description}', '${data.photo}', '${data.record}');`);
            return newWorker;
        } catch (e) {
            return false;
        } finally {
            await client.end();
        }
        
        };

        
    static async mod(data){
        const client = new Client(connection);
        client.connect()

        try{
            const modComp = client.query(`UPDATE workers SET 
                name_description = '${data.name_description}', 
                photo = '${data.photo}', 
                record = '${data.record}';`);
            return modComp;
        } catch (e) {
            return false;
        } finally {
            await client.end();
        }
        
    };

    static async delete(data){
        const client = new Client(connection);
        client.connect()

        try{
            const deleteWorker = client.query(`DELETE FROM workers WHERE idcompany = '${data.idcompany}' AND idworker= '${data.idworker}' ;`);
            return deleteWorker;
        } catch (e) {
            return false;
        } finally {
            await client.end();
        }
        
    };

}


module.exports = workersManager
