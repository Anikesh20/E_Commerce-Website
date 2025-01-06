const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const { createConnection } = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

// Initialize Express app
const app = express();


// Middleware setup
app.use(json());
app.use(cors()); // Enable CORS for all routes


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

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send('No token provided.');
  }

  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized.');
    }
    req.userId = decoded.id; // Set the user ID in the request object
    next();
  });
};

// Route for user signup
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send('All fields are required.');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err.message);
        return res.status(500).send('Failed to create user.');
      }
      res.status(201).send({ message: 'User registered successfully!' });
    });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).send('Server error during signup.');
  }
});

// Route for user login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required.');
  }

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error('Error fetching user:', err.message);
      return res.status(500).send('Login failed.');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found.');
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials.');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    res.status(200).send({ message: 'Login successful!', token });
  });
});

// Start the server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
