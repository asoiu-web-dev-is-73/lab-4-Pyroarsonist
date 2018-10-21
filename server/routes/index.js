var express = require('express');
var router = express.Router();
var mysql = require('../mysql')

/* GET home page. */
router.get('/data', async function (req, res, next) {

  const data = {}

  await mysql.query('SELECT * FROM CorrectData', async function (error, results, fields) {
    if (error) throw error;
    data.correctData = results
    await mysql.query('SELECT * FROM FalsyData', function (error, results, fields) {
      if (error) throw error;
      data.falsyData = results
    });
    return res.json(data)
  });


});

module.exports = router;
