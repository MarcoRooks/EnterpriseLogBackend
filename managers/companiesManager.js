const {Client} = require("pg");
const connection = requiere("../managers/connection.js")
const Company = require("../models/Company.js");



class companiesManager{
  async getAll(){
      const client = new Client(connection);
      await client.connect()
      const companies = await client.query("SELECT * FROM companies;");
      newCompanies = companies.map((company) => new Company(company));
      await client.end();
      return newCompanies;
    }

  async getByID(idcompany){
    const client = new Client(connection);
    await client.connect()
    const companies = await client.query(`SELECT * FROM companies WHERE idcompany = '${idcompany}';`);

    await client.end()
    return companies;
  }

  async createNew(data){
    const client = new Client(connection);
    await client.connect()

    const newComp = await client.query(`INSERT INTO companies (name_description, sector, creation_date, logo, webpage, phone_number, social_media, company_value, num_employees, images) VALUE ('${data.name_description}', '${data.sector}', '${data.creation_date}', '${data.logo}', '${data.webpage}', '${data.phone_number}', '${data.social_media}', '${data.company_value}', '${data.num_employees}', '${data.images}');`);

    await client.end()
    return newComp
  }

  async deleteByID(idcompany){
    const client = new Client(connection);
    await client.connect()
    const deleteComp = await client.query(`DELETE FROM companies WHERE idcompany = '${idcompany}' ;`)

    await client.end()
    return deleteComp

  }

  async mod(data){
    const client = new Client(connection);
    await client.connect()
    const modComp = await client.query(`UPDATE companies SET 
      name_description = '${data.name_description}', 
      sector = '${data.sector}', 
      creation_date = '${data.creation_date}', 
      logo = '${data.logo}', 
      webpage = '${data.webpage}', 
      phone_number = '${data.phone_number}', 
      social_media = '${data.social_media}', 
      company_value = '${data.company_value}', 
      num_employees = '${data.num_employees}', 
      images = '${data.images}' ;`)
      
    await client.end()
    return modComp;
  }

}

module.exports = companiesManager