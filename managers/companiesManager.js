const { Client } = require("pg");
const connection = require("./connection.js");
const Company = require("../models/Company.js");



class companiesManager {
  static async getAll() {

    const client = new Client(connection);
    await client.connect();

    try {
      const companies = await client.query("SELECT * FROM companies;");
      return companies;
    } catch (e) {
      return false;
    } finally {
      await client.end();
    }

  }
  static async getByName(name_description){
    const client = new Client(connection);
    await client.connect();
    try {
      const companies = await client.query(`SELECT * FROM companies WHERE name_description ILIKE '%${name_description}%';`);
      return companies.rows
    } catch (error) {
      return false;
    } finally {
      await client.end()
    }

  }

  static async getByID(iduser) {

    const client = new Client(connection);
    await client.connect();

    try {
      const companies = await client.query(`SELECT * FROM companies WHERE iduser = '${iduser}';`);
      return companies.rows
    } catch (e) {
      return false;
    } finally {
      await client.end();
    }

  }

  static async getByIDCompany(idcompany) {

    const client = new Client(connection);
    await client.connect();

    try {
      const companies = await client.query(`SELECT * FROM companies WHERE idcompany = '${idcompany}';`);
      return companies.rows
    } catch (e) {
      return false;
    } finally {
      await client.end();
    }

  }

  static async createNew(data) {

    const client = new Client(connection);
    await client.connect()

    try {
      const newComp = await client.query(`INSERT INTO companies (iduser, name_description, sector, creation_date, logo, webpage, phone_number, social_media, company_value, num_employees, images,  company_description) 
      VALUES (
        '${data.iduser}', 
      '${data.name_description}', 
      '${data.sector}', 
      '${data.creation_date}', 
      '${data.logo}', 
      '${data.webpage}', 
      ${data.phone_number}, 
      '${data.social_media}', 
      '${data.company_value}', 
      '${data.num_employees}', 
      '${data.images}',
      '${data.company_description}');`);
      
      return newComp
    } catch (e) {
      console.log("falla", e)
      return false;
    } finally {
      await client.end();
    }

  }

  static async deleteByID(idcompany) {

    const client = new Client(connection);
    await client.connect();

    try {
      const deleteComp = await client.query(`DELETE FROM companies WHERE idcompany = '${idcompany}' ;`);
      return deleteComp
    } catch (e) {
      return false
    } finally {
      await client.end()
    }

  }

  static async mod(data, id) {

    const client = new Client(connection);
    await client.connect();
    console.log(data, id)

    try {
      const modComp = await client.query(`UPDATE companies SET
      name_description = '${data.name_description}', 
      sector = '${data.sector}', 
      creation_date = '${data.creation_date}', 
      logo = '${data.logo}', 
      webpage = '${data.webpage}', 
      phone_number = ${data.phone_number}, 
      social_media = '${data.social_media}', 
      company_value = '${data.company_value}', 
      num_employees = '${data.num_employees}', 
      images = '${data.images}' WHERE idcompany='${id}';`);
      return modComp;
    } catch (e) {
      return false;
    } finally {
      await client.end();
    }

  }

  static async buyCompany(iduser,idcompany) {
    const client = new Client(connection);
    await client.connect();

    try {
      const buycompany = await client.query(`UPDATE companies SET iduser='${iduser}' where idcompany='${idcompany}';`);
      return buycompany
    } catch (e) {
      return false
    } finally {
      await client.end()
    }

  }

}

module.exports = companiesManager
