var router = require('express').Router();

router.get('/', require('../controllers/empleados/'));

module.exports = router;