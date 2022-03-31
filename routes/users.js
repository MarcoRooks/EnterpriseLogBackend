var router = require('express').Router();

//Devuelve un usuario en concreto buscando por username
router.post('/', require('../controllers/users/getUser'));

//Devuelve un usuario en concreto buscando por email
router.post('/email', require('../controllers/users/getUserByEmail'));

//Crea un usuario
router.post('/create', require('../controllers/users/createUser'));

//Modifica un usuario
router.patch('/mod/:id', require('../controllers/users/modUser'));

//Borrar usuario
router.delete('/:id', require('../controllers/users/deleteUser'));

module.exports = router;