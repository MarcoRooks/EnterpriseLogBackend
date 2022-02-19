var router = require('express').Router();

//Devuelve todos los usuarios
router.get('/', require('../controllers/users/getAllUsers'));

//Devuelve un usuario en concreto
router.get('/:id', require('../controllers/users/getUser'));

//Crea un usuario
router.post('/create', require('../controllers/users/createUser'));

//Modifica un usuario
router.patch('/mod/:id' , require('../controllers/users/modUser'));

//Borrar usuario
router.delete('/:id', require('../controllers/users/deleteUser'));

module.exports = router;