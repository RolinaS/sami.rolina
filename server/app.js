const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const myConnection = require('express-myconnection');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware pour analyser les requêtes JSON

const dbOptions = {
  host: process.env.DB_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.DB_PORT,
};

app.use(myConnection(mysql, dbOptions, 'single'));

// LIST MDL
app.get('/api/gendarmes', (req, res) => {
  req.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return res.status(500).send('Database connection error');
    }

    const query = 'SELECT * FROM gendarmes';  // Assurez-vous que le nom de votre table est correct

    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Query execution error');
      }

      res.json(results);
    });
  });
});

// LIST SOG
app.get('/api/sous-officier', (req, res) => {
  req.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return res.status(500).send('Database connection error');
    }

    const query = 'SELECT * FROM sog';  // Assurez-vous que le nom de votre table est correct

    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Query execution error');
      }

      res.json(results);
    });
  });
});

// INSERT
app.post('/ajout/gendarmes', (req, res) => {
  console.log('Request Body:', req.body); // Ajoutez ceci pour déboguer

  const { nom, prenom, grade } = req.body; // Assurez-vous que req.body contient les bonnes clés

  if (!nom || !prenom || !grade) {
    return res.status(400).json({ error: 'Nom, prenom et grade sont requis' });
  }

  req.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return res.status(500).send('Database connection error');
    }

    const query = 'INSERT INTO gendarmes (nom, prenom, grade) VALUES (?, ?, ?)';
    connection.query(query, [nom, prenom, grade], (error, results) => {
      if (error) {
        console.error('Error adding element to database:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'Element added successfully', id: results.insertId });
    });
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
