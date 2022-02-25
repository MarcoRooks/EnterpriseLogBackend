import client from "../managers/connection.js";

class workersManager{
    
    //brings forward all the workers in the table
    getAll(){
        const workers = client.query("SELECT * FROM workers;");
        newWorkers = workers.map((worker) => new User(worker));
        client.end();
        return newWorkers;
    };

    //Brigns workers with one condition
    getByCriterias(criterions){
        const workers = client.query(`SELECT * FROM Workers WHERE ${criterions.key} ${criterions.criteria} ${criterions.value};`);
        newUsers = workers.map((worker) => new Workers(worker));
        client.end();
        return newUsers;
    }

    //Create a new Worker
    createNew(){
        const {name_description, foto, historial} = req.body
        
        let newWorker = client.query(`INSERT INTO workers (name_description, foto, historial) VALUE (${name_description}, ${foto}, ${historial});`)
        client.end()
        return newWorker
      };

    mod(){};

    delete(){};

}

let criterions = {criteria: `${criteria}`,
key: `${key}`,
value: `${value}`,
nextConcat: `${nextConcat}`} 