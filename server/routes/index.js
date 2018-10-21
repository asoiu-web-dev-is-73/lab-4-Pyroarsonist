var express = require('express');
var router = express.Router();
var mysql = require('../mysql')

/* GET home page. */
router.get('/data', async function (req, res, next) {

  const data = {}

  await mysql.query('SELECT * FROM CorrectData', async function (error, results) {
    if (error) throw error;
    data.correctData = results
    await mysql.query('SELECT * FROM FalsyData', function (error, results) {
      if (error) throw error;
      data.falsyData = results
    });
    return res.json(data)
  });


});

router.post('/lulz', async function (req, res, next) {


  const {rows, columns} = req.body

  if (rows <= 0 || columns <= 0) {

    await mysql.query(`INSERT INTO FalsyData (rows, clmns) VALUES (${rows}, ${columns})`, async function (error, results) {
      if (error) throw error;
      return res.json({error: true, message: 'You have negative sizes'})
    });

  }

  await mysql.query(`INSERT INTO CorrectData (rows, clmns) VALUES (${rows}, ${columns})`, async function (error, results) {
    if (error) throw error;
    return res.json({success: true, message: 'Building table'})
  });

});

module.exports = router;
