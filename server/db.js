const mysql = require('mysql2');

const connection = {
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: '3306',
  };

  connection.connect(error => {
    if (error) {
      console.error('Error connecting to the database:', error);
      return;
    }
    console.log('Connected to the MySQL database.');
  });
  
  module.exports = connection;