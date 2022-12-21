const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Query the database using the pool
pool.query('SELECT * FROM your_table', (error, results) => {
  if (error) throw error;
  console.log(results);
});

// Close the pool
pool.end();
