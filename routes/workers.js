var router = require('express').Router();

router.get('/', require('../controllers/workers/'));

module.exports = router;