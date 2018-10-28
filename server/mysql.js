import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

export default mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});
