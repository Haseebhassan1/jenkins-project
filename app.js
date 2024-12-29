const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: 'mysql-db',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

// Check MySQL connection
connection.connect((err) => {
  if (err) {
    console.error('error connecting to the database:', err.stack);
    return;
  }
  console.log('connected to MySQL as id ' + connection.threadId);
});

app.get('/', (req, res) => {
  res.send('Hello, Jenkins and Docker!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
