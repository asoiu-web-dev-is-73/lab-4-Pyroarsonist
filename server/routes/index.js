import { Router } from 'express';
import mysql from '../mysql';

const router = Router();

/* GET home page. */
router.get('/data', async (req, res) => {
  const data = {};

  data.correctData = await mysql.query('SELECT * FROM CorrectData');
  data.falsyData = await mysql.query('SELECT * FROM FalsyData');
  return res.json(data);
});

router.post('/save', async (req, res) => {
  const constant = Number.parseInt(req.body.constant);

  if (!constant || constant <= 0) {
    await mysql.query(
      `INSERT INTO FalsyData (constant) VALUES (${req.body.constant ||
        'NULL'})`,
    );
    return res.json({ error: true, message: 'You have invalid input' });
  }
  await mysql.query(`INSERT INTO CorrectData (constant) VALUES (${constant})`);
  return res.json({ success: true, message: 'Building table' });
});

export default router;
