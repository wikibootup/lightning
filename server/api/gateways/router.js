var express = require('express');

var Gateways = require('../gateways/gateways');

var router = express.Router();

router.get('/', function(req, res) {
  Gateways.getGateways(req)
    .then(function(data) { res.json(data) });
});

module.exports = router;
