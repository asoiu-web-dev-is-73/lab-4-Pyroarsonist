import { Router } from 'express';
import mysql from '../mysql';

const router = Router();

/* GET home page. */
router.get('/data', async (req, res) => {
  const data = {};

  await mysql.query('SELECT * FROM CorrectData', async (error, results) => {
    if (error) throw error;
    data.correctData = results;
    await mysql.query('SELECT * FROM FalsyData', (errorFalsy, resultsFalsy) => {
      if (errorFalsy) throw errorFalsy;
      data.falsyData = resultsFalsy;
    });
    return res.json(data);
  });
});

router.post('/lulz', async (req, res) => {
  const constant = Number.parseInt(req.body.constant);

  if (!constant || constant <= 0) {
    await mysql.query(
      `INSERT INTO FalsyData (constant) VALUES (${req.body.constant})`,
      async error => {
        if (error) throw error;
        return res.json({ error: true, message: 'You have invalid input' });
      },
    );
  } else {
    await mysql.query(
      `INSERT INTO CorrectData (constant) VALUES (${constant})`,
      async error => {
        if (error) throw error;
        return res.json({ success: true, message: 'Building table' });
      },
    );
  }
});

export default router;
