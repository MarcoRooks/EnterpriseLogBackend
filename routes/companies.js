var router = require('express').Router();

//Devuelve todas las empresas
router.get('/', require('../controllers/companies/getAllCompany'));

//Devuelve las empresas en concreto buscando por id del user
router.get('/:id', require('../controllers/companies/getCompany'));

//Devuelve una empresa en concreto buscando por su id
router.get('/company/:id', require('../controllers/companies/getCompanyByItId'));

//Buscar empresa por nombre
router.get('/search/:name_description', require('../controllers/companies/getCompanyByName'))

//Crea una empresa
router.post('/create', require('../controllers/companies/createCompany'));

//Modifica una empresa
router.put('/mod/:id', require('../controllers/companies/modCompany'));

//Compra una empresa
router.put('/buy/:userid/:companyid', require('../controllers/companies/buyCompany'));

//Borrar empresa
router.delete('/:id', require('../controllers/companies/deleteCompany'));

module.exports = router;