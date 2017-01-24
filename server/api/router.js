var express = require('express');

var router = express.Router();

router.use('/auth', require('./auth/router'));
router.use('/gateways', require('./gateways/router'));

module.exports = router;
