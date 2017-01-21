var express = require('express');

var router = express.Router();

router.use('/auth', require('./auth/router'));

module.exports = router;
