var express = require('express');

var router = express.Router();

router.get('/auth', function(req, res) {
  res.json(req.user);
});

module.exports = router;
