const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
  console.log('Connected to MySQL database!');
});

app.get('/', (req, res) => {
  res.send('Web app is running and connected to the database!');
});

app.listen(3000, () => {
  console.log('Web server listening on port 3000');
});
