var router = require('express').Router();

router.use('/empresas', require('./empresas'));
router.use('/empleados', require('./empleados'));
router.use('/usuarios', require('./usuarios'));

module.exports = router;