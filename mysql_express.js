const express = require('express');
const mysql = require('mysql');

// Buat koneksi ke database MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nama_user',
  password: 'kata_sandi',
  database: 'nama_database'
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Koneksi ke database berhasil');
  }
});

// Buat aplikasi express
const app = express();

// Buat route yang akan menampilkan semua data dari tabel
app.get('/', (req, res) => {
  const query = 'SELECT * FROM nama_tabel';
  connection.query(query, (error, rows) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      res.send(rows);
    }
  });
});

// Mulai server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada http://localhost:3000');
});
