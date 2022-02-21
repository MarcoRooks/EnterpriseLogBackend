var router = require('express').Router();

//Devuelve todas las empresas
router.get('/', require('../controllers/companies/getAllCompany'));

//Devuelve una empresa en concreto
router.get('/:id', require('../controllers/companies/getCompany'));

//Crea una empresa
router.post('/create', require('../controllers/companies/createCompany'));

//Modifica una empresa
router.patch('/mod/:id', require('../controllers/companies/modCompany'));

//Borrar empresa
router.delete('/:id', require('../controllers/companies/deleteCompany'));

module.exports = router;