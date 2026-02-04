require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || "db",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "todotraverse"
});

module.exports = pool;
