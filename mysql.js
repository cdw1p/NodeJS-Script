const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Connect to the database
connection.connect((error) => {
if (error) throw error;
  console.log('Successfully connected to the database.');
});

// Query the database
const query = 'SELECT * FROM your_table';
connection.query(query, (error, results) => {
  if (error) throw error;
  console.log(results);
});

// Close the connection
connection.end();
