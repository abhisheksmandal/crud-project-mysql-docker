// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Create Users Table Route
app.get('/create-table', async (req, res) => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        age INT
      )
    `;
    await db.execute(createTableQuery);
    res.status(200).send('Table created successfully');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create User Route
app.post('/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const [result] = await db.execute(
      'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
      [name, email, age]
    );
    res.status(201).json({ 
      id: result.insertId, 
      name, 
      email, 
      age 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Users Route
app.get('/users', async (req, res) => {
    try {
      const [rows] = await db.execute('SELECT * FROM users WHERE `show` = 1');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
// Update User Route
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    await db.execute(
      'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?',
      [name, email, age, id]
    );
    res.status(200).json({ id, name, email, age });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete User Route
app.delete('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await db.execute('UPDATE users SET `show` = 0 WHERE id = ?', [id]);
      res.status(200).json({ message: 'User hidden successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});