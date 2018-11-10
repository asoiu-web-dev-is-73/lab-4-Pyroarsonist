import mysql from 'promise-mysql';
import dotenv from 'dotenv';

dotenv.config();
const conn = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  connectionLimit: 10,
});

export default conn;
