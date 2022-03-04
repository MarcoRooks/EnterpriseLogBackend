import client from "../managers/connection.js";
import Worker from "../models/Worker";

class workersManager{
    
    //brings forward all the workers in the table
    getAll(){
        const workers = client.query("SELECT * FROM workers;");
        
        client.end();
        return  new newWorkers;
    };

    //Brigns workers with one condition
    getByCriterias(criterions){
        const workers = client.query(`SELECT * FROM workers WHERE ${key} ${criteria} ${value};`);
        
        client.end();
        return workers;
    }

    //Create a new Worker
    createNew(){
        const {name_description, foto, historial} = req.body
        
        let newWorker = client.query(`INSERT INTO workers (name_description, foto, historial) VALUE (${name_description}, ${foto}, ${historial});`)

        client.end()
        return newWorker
      };

    mod(){
        const modComp = client.query(`UPDATE workers SET 
            name_description = ${name_description}, 
            foto = ${foto}, 
            historial = ${historial}`)

        client.end()
        return modComp
    };

    delete(){
        const deleteWorker = client.query(`DELETE FROM workers WHERE idcompany = ${idcompany} AND idworker= ${idworker} ;`)
      
        client.end()
        return deleteWorker
    };

}

let criterions = {criteria: `${criteria}`,
key: `${key}`,
value: `${value}`,
nextConcat: `${nextConcat}`} 