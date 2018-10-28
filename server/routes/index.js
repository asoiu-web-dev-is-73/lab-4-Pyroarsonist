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
  const rows = Number.parseInt(req.body.rows);
  const columns = Number.parseInt(req.body.columns);

  if (!rows || !columns || rows <= 0 || columns <= 0) {
    await mysql.query(
      `INSERT INTO FalsyData (rows, clmns) VALUES (${req.body.rows}, ${
        req.body.rows
      })`,
      async error => {
        if (error) throw error;
        return res.json({ error: true, message: 'You have invalid inputs' });
      },
    );
  } else {
    await mysql.query(
      `INSERT INTO CorrectData (rows, clmns) VALUES (${rows}, ${columns})`,
      async error => {
        if (error) throw error;
        return res.json({ success: true, message: 'Building table' });
      },
    );
  }
});

export default router;
