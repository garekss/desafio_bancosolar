const { configDotenv } = require("dotenv");
const { Pool } = require("pg");
configDotenv();

//require("dotenv").config();

const pool = new Pool({
  user: process.env.USERDB || "postgres", 
  host: process.env.HOSTDB || "127.0.0.1",
  password: process.env.PASSDB || "nacho123", 
  port: process.env.PORTDB || 5432, 
  database: process.env.DATABASE || "postgres", 
});

module.exports = pool;