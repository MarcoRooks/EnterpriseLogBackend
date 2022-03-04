import client from "../managers/connection.js";

class companiesManager{
    
    getAll(){
        const companies = client.query("SELECT * FROM companies;");
        newCompanies = companies.map((company) => new Company(company));
        client.end();
        return newCompanies;
      }

    getByID(){
        const companies = client.query(`SELECT * FROM companies WHERE idcompany = ${idcompany};`);

        client.end()
        return newCompanies;
    }

    createNew(){
      const {name_description, sector, creation_date, logo, webpage, phone_number, social_media, company_value, num_employees, images} = req.body

      const newComp = client.query(`INSERT INTO companies (name_description, sector, creation_date, logo, webpage, phone_number, social_media, company_value, num_employees, images) VALUE (${name_description}, ${sector}, ${creation_date}, ${logo}, ${webpage}, ${phone_number}, ${social_media}, ${company_value}, ${num_employees}, ${images});`);

      client.end()
      return newComp
    }

    delete(){
      const deleteComp = client.query(`DELETE FROM companies WHERE idcompany = ${idcompany} ;`)

      client.end()
      return deleteComp

    }

    mod(){
      const modComp = client.query(`UPDATE companies SET 
        name_description = ${name_description}, 
        sector = ${sector}, 
        creation_date = ${creation_date}, 
        logo = ${logo}, 
        webpage = ${webpage}, 
        phone_number = ${phone_number}, 
        social_media = ${social_media}, 
        company_value = ${company_value}, 
        num_employees = ${num_employees}, 
        images = ${images}`)
        
        client.end()
        return modComp;
    }

}