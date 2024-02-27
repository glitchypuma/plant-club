const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"Issuing6!Thus!Curry",
    host: "localhost",
    port: 5432,
    database: "pg_dev"
});

module.exports = pool;