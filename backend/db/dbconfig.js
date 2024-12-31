const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Pass@54321',
  database: process.env.DB_NAME || 'book_store',
  port: process.env.DB_PORT || 3306,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('Connected to the MySQL database.');
});

module.exports = db;
