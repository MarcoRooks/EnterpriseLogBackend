var router = require('express').Router();

router.get('/', require('../controllers/empresas/'));

module.exports = router;