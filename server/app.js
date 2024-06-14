const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const myConnection = require('express-myconnection');
require('dotenv').config();

const app = express();

app.use(cors());

const dbOptions = {
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: '3306',
};

app.use(myConnection(mysql, dbOptions, 'single'));

// API endpoint to list all records from the 'homme' table
app.get('/api/gendarmes', (req, res) => {
  req.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return res.status(500).send('Database connection error');
    }

    const query = 'SELECT * FROM gendarmes';  // Make sure your table name is 'homme'

    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Query execution error');
      }

      res.json(results);
    });
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
