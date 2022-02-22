var router = require('express').Router();

//Devuelve todos los empleado
router.get('/', require('../controllers/workers/getAllWorkers'));

//Devuelve un empleado en concreto
router.get('/:id', require('../controllers/workers/getWorker'));

//Crea un empleado
router.post('/create', require('../controllers/workers/createWorker'));

//Modifica un empleado
router.patch('/mod/:id' , require('../controllers/workers/modWorker'));

//Borrar empleado
router.delete('/:id', require('../controllers/workers/deleteWorker'));

module.exports = router;