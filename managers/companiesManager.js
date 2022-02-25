import client from "../managers/connection.js";

class companiesManager{
    
    getAll(){
        const companies = client.query("SELECT * FROM companies;");
        newCompanies = companies.map((company) => new Company(company));
        client.end();
        return newCompanies;
      }

    getByID(){

    }

    createNew(){

    }

    delete(){

    }

    mod(){
        
    }

}