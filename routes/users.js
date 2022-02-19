var router = require('express').Router();

router.get('/', require('../controllers/users/'));

module.exports = router;