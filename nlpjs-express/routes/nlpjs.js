var express = require('express');
var url = require('url');
var router = express.Router();
var talk = require('../nlpjs/nlplib');

/* GET users listing. */
router.get('/talk', async function (req, res) {
  var getParams = url.parse(req.url, true).query;

  if (Object.keys(getParams).length == 0) {
    res.end('Hello all');
  } else {
    var resp = await talk.talking(getParams.q);
    res.json(resp.answer);
  }
});

module.exports = router;
