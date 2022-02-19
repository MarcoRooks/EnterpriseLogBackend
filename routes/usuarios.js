var router = require('express').Router();

router.get('/', require('../controllers/usuarios/'));

module.exports = router;