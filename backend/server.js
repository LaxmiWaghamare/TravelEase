const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // change to your MySQL username
  password: 'root', // change to your MySQL password
  database: 'vap',
  port: 3304
});

// Create table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    contact VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    country VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    pin VARCHAR(20) NOT NULL,
    destination VARCHAR(255),
    price VARCHAR(50),
    travel_date DATE,
    guests INT
  )
`;

// Create feedback table if it doesn't exist
const createFeedbackTableQuery = `
  CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL Connected');
  
  // Create tables
  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating records table:', err);
      return;
    }
    console.log('Records table checked/created successfully');
  });

  db.query(createFeedbackTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating feedback table:', err);
      return;
    }
    console.log('Feedback table checked/created successfully');
  });
});

// Registration endpoint
app.post('/api/register', (req, res) => {
  const { fullname, email, password, contact, address, country, state, city, pin, destination, price, travel_date, guests } = req.body;
  
  const sql = `INSERT INTO records (
    fullname, email, password, contact, address, country, state, city, pin, 
    destination, price, travel_date, guests
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  db.query(sql, [
    fullname, email, password, contact, address, country, state, city, pin,
    destination, price, travel_date, guests
  ], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Email already registered.' });
      }
      return res.status(500).json({ message: 'Database error. Please try again.' });
    }
    res.json({ message: 'User Registered Successfully' });
  });
});

// Feedback endpoint
app.post('/api/feedback', (req, res) => {
  const { name, email, rating, message } = req.body;
  
  const sql = `INSERT INTO feedback (name, email, rating, message) VALUES (?, ?, ?, ?)`;
  
  db.query(sql, [name, email, rating, message], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Failed to submit feedback. Please try again.' });
    }
    res.json({ message: 'Feedback submitted successfully' });
  });
});

// Book tour endpoint
app.post('/api/book-tour', (req, res) => {
  const { fullname, email, contact, destination, travel_date, guests, country } = req.body;
  
  const sql = `INSERT INTO records (
    fullname, email, password, contact, address, country, state, city, pin, 
    destination, price, travel_date, guests
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  db.query(sql, [
    fullname, email, 'default123', contact, 'Not provided', country, 'Not provided', 'Not provided', '000000',
    destination, 'To be determined', travel_date, guests
  ], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Email already registered.' });
      }
      return res.status(500).json({ message: 'Database error. Please try again.' });
    }
    res.json({ message: 'Tour booking successful! We will contact you shortly.' });
  });
});

app.get('/api/answer', async (req, res) => {
  const userQuestion = req.query.q;
  // Use a simple LIKE search or a full-text search for better results
  const [rows] = await db.query(
    "SELECT answer FROM questions WHERE question LIKE ? LIMIT 1",
    [`%${userQuestion}%`]
  );
  if (rows.length > 0) {
    res.json({ answer: rows[0].answer });
  } else {
    res.json({ answer: "Sorry, I don't have an answer for that question yet." });
  }
});

app.listen(5000, () => console.log('Server running on port 5000')); 