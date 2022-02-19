var router = require('express').Router();

//Devuelve todas las empresas
router.get('/', require('../controllers/company/getAllCompany'));

//Devuelve una empresa en concreto
router.get('/:id', require('../controllers/company/getCompanys'));

//Crea una empresa
router.post('/create', require('../controllers/company/createCompany'));

//Modifica una empresa
router.patch('/mod/:id' , require('../controllers/company/modCompany'));

//Borrar empresa
router.delete('/:id', require('../controllers/company/deleteCompany'));

module.exports = router;