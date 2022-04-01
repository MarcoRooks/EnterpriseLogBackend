var router = require('express').Router();

//Devuelve un usuario en concreto buscando por username
router.post('/', require('../controllers/users/getUser'));

//Devuelve un usuario en concreto buscando por email
router.post('/email', require('../controllers/users/getUserByEmail'));

//Crea un usuario
router.post('/create', require('../controllers/users/createUser'));

//Modifica un usuario
router.put('/mod/:id', require('../controllers/users/modUser'));

//Modifica el crédito de un usuario
router.put('/modcredit/:id', require('../controllers/users/modUserCredit'));

//Borrar usuario
router.delete('/:id', require('../controllers/users/deleteUser'));

module.exports = router;