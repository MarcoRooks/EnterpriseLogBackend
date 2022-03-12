var router = require('express').Router();

//Devuelve un usuario en concreto
router.get('/', require('../controllers/users/getUser'));

//Crea un usuario
router.post('/create', require('../controllers/users/createUser'));

//Modifica un usuario
router.patch('/mod/:id', require('../controllers/users/modUser'));

//Borrar usuario
router.delete('/:id', require('../controllers/users/deleteUser'));

module.exports = router;