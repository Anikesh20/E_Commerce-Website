const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();


app.use(bodyParser.json());
app.use(cors());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Pass@54321', 
  database: 'book_store' 
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the MySQL database.');
  }
});


app.get('/', (req, res) => {
  res.send('Book Store API is running.');
});


app.post('/api/messages', (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql = 'INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('Error inserting message:', err.message);
      return res.status(500).send('Failed to save message.');
    }
    res.status(200).send({ message: 'Message saved successfully!', id: result.insertId });
  });
});


app.get('/api/messages', (req, res) => {
  const sql = 'SELECT * FROM messages ORDER BY created_at DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching messages:', err.message);
      return res.status(500).send('Failed to fetch messages.');
    }
    res.status(200).json(results);
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
