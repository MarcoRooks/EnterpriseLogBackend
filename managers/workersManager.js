const myClient = require('../managers/connection')
const Workers = require('../models/Worker')

class workersManager{
    
    //brings forward all the workers in the table
    getAll(){
        const workers = myClient.query("SELECT * FROM workers;");
        newWorkers = workers.map((worker) => new Workers(worker));
        myClient.end();
        return  new newWorkers;
    };

    //Brigns workers with one condition
    getByCriterias(criterions){
        const workers = myClient.query(`SELECT * FROM workers WHERE ${key} ${criteria} ${value};`);
        
        myClient.end();
        return workers;
    }

    //Create a new Worker
    createNew(){
        const {name_description, foto, historial} = req.body
        
        let newWorker = myClient.query(`INSERT INTO workers (name_description, foto, historial) VALUE (${name_description}, ${foto}, ${historial});`)

        myClient.end()
        return newWorker
      };

    mod(){
        const modComp = myClient.query(`UPDATE workers SET 
            name_description = ${name_description}, 
            foto = ${foto}, 
            historial = ${historial}`)

        myClient.end()
        return modComp
    };

    delete(){
        const deleteWorker = myClient.query(`DELETE FROM workers WHERE idcompany = ${idcompany} AND idworker= ${idworker} ;`)
      
        myClient.end()
        return deleteWorker
    };

}

let criterions = {criteria: `${criteria}`,
key: `${key}`,
value: `${value}`,
nextConcat: `${nextConcat}`} 