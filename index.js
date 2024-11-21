const express = require('express');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Leer variables de entorno desde .env
dotenv.config();

const app = express();

// Conexión a la base de datos usando createPool
const pool = mysql.createPool({
  host: process.env.DB_HOST, // usar la variable de entorno definida
  user: 'root',
  password: process.env.DB_PASSWORD, // usar la variable de entorno definida
  database: process.env.DB_NAME, // usar la variable de entorno definida
  port: 3306 // usualmente MySQL usa el puerto 3306
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json(result[0]);
});

const PORT = process.env.NODE_DOCKER_PORT || 3000; // fallback al puerto 3000 si la variable no está definida

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

