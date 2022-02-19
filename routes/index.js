var router = require('express').Router();

router.use('/companies', require('./companies'));
router.use('/workers', require('./workers'));
router.use('/users', require('./users'));

module.exports = router;