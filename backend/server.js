
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const { createConnection } = require('mysql2');
require('dotenv').config(); 


// Initialize Express app
const app = express();

// Middleware setup
app.use(json());
app.use(cors()); // Enable CORS for all routes

// Create MySQL database connection using environment variables
const db = createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Pass@54321',
  database: process.env.DB_NAME || 'book_store1',
  port: process.env.DB_PORT || 3306,
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit process if DB connection fails
  }
  console.log('Connected to the MySQL database.');
});

// Route for submitting a message (POST)
app.post('/api/messages', (req, res) => {
  const { name, email, phone, message } = req.body;

  // SQL query to insert data into the 'messages' table
  const sql = 'INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)';
  
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('Error inserting message:', err.message);
      return res.status(500).send('Failed to save message.');
    }
    res.status(200).send({ message: 'Message saved successfully!', id: result.insertId });
  });
});

// Route for fetching messages (GET)
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

// Start the server
const PORT = process.env.PORT || 5000; //port 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
