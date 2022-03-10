/* import client from "../managers/connection.js";
import Company from "../models/Company" */
const client = require("../managers/connection.js");
const Company = require("../models/Company");



class companiesManager {

  getAll() {
    try {
      const companies = client.query("SELECT * FROM companies;");
      newCompanies = companies.map((company) => new Company(company));
      return newCompanies;
    } catch (e) {
      return false
    } finally {
      client.end();
    }
  }

  getByID() {
    try {
      const companies = client.query(`SELECT * FROM companies WHERE idcompany = ${idcompany};`);
      return newCompanies;
    } catch (e) {
      return false
    } finally {
      client.end()
    }
  }

  createNew() {
    try {
      const { name_description, sector, creation_date, logo, webpage, phone_number, social_media, company_value, num_employees, images } = req.body
      const newComp = client.query(`INSERT INTO companies (name_description, sector, 
        creation_date, logo, webpage, phone_number, social_media, 
        company_value, num_employees, images) 
        VALUE (${name_description}, ${sector}, ${creation_date}, ${logo}, ${webpage}, 
          ${phone_number}, ${social_media}, ${company_value}, ${num_employees}, ${images});`);
      return newComp
    } catch (e) {
      return false
    } finally {
      client.end()
    }
  }

  delete() {
    try {
      const deleteComp = client.query(`DELETE FROM companies WHERE idcompany = ${idcompany} ;`)
      return deleteComp
    } catch (e) {
      return false
    } finally {
      client.end()
    }
  }

  mod() {
    try {
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
      return modComp;
    } catch (e) {
      return false
    } finally {
      client.end()
    }
  }
}