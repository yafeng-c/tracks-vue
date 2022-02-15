const Pool = require("pg").Pool;

const pool = new Pool({
  user: "test",
  password: "TestUser",
  host: "localhost",
  port: 5432,
  database: "homeworks",
});

module.exports = pool;
