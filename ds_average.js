const fs = require('fs');
const csv = require('csv-parser');

// Membaca file CSV
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Menggunakan algoritma data science disini
    // Contoh: mencari rata-rata dari sebuah kolom
    const sum = row.reduce((acc, curr) => acc + parseInt(curr), 0);
    const avg = sum / row.length;
    console.log(`Rata-rata: ${avg}`);
  })
  .on('end', () => {
    console.log('Selesai membaca file CSV');
  });
