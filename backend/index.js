const express = require('express');
const sql = require('mssql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true
  }
};

sql.connect(dbConfig, err => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

app.get('/api/employee', async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM employee`;
    res.json(result.recordset);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});