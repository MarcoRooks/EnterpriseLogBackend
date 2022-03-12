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

  static async createNew(data) {

    const client = new Client(connection);
    await client.connect()

    try {
      const newComp = await client.query(`INSERT INTO companies (iduser, name_description, sector, creation_date, logo, webpage, phone_number, social_media, company_value, num_employees, images) 
      VALUES (
        '${data.iduser}', 
      '${data.name_description}', 
      '${data.sector}', 
      '${data.creation_date}', 
      '${data.logo}', 
      '${data.webpage}', 
      '${data.phone_number}', 
      '${data.social_media}', 
      '${data.company_value}', 
      '${data.num_employees}', 
      '${data.images}');`);

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

  static async mod(data) {

    const client = new Client(connection);
    await client.connect();

    try {
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
      images = '${data.images}' ;`);
      return modComp;
    } catch (e) {
      return false;
    } finally {
      await client.end();
    }

  }

}

module.exports = companiesManager
