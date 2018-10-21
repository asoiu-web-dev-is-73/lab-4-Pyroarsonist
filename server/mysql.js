var mysql = require('mysql');
require('dotenv').config()


const q = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

module.exports = q;