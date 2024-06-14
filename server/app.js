const express = require('express');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
require('dotenv').config();

const app = express();

const dbOptions = {
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: '3306',
};

app.use(myConnection(mysql, dbOptions, 'single'));

app.get('/', (req, res) => {
  req.getConnection((err, connection) => {
    if (err) return res.send('Connection error');
    connection.query('SELECT 1 + 1 AS solution', (err, results) => {
      if (err) return res.send('Query error');
      res.send(`The solution is: ${results[0].solution}`);
    });
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});