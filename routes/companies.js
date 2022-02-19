var router = require('express').Router();

router.get('/', require('../controllers/companies/'));

module.exports = router;