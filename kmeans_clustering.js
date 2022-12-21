const fs = require('fs'); // modul untuk mengelola file
const math = require('mathjs'); // modul untuk mengolah data numerik
const chalk = require('chalk'); // modul untuk memberi warna pada output

// Pertama, kita perlu membaca data yang akan digunakan untuk proses data mining. Data tersebut dapat berupa file CSV atau Excel, atau dapat juga diambil dari database.
// membaca file CSV
const data = fs.readFileSync('data.csv', 'utf-8');

// mengubah data menjadi array of arrays
const rows = data.split('\n').map(row => row.split(','));

// mengambil header dari data
const header = rows[0];

// mengambil baris data tanpa header
const dataRows = rows.slice(1);

// Selanjutnya, kita dapat memilih algoritma data mining yang akan digunakan. Misalnya, untuk mencari kluster dari data, kita dapat menggunakan algoritma K-Means Clustering.
// memilih algoritma K-Means Clustering
const kmeans = new KMeans();

// menentukan jumlah kluster yang diinginkan
const k = 3;

// mengolah data dengan algoritma K-Means Clustering
const result = kmeans.cluster(dataRows, k);

// Terakhir, kita dapat menampilkan hasil proses data mining dengan menggunakan modul untuk menambahkan warna pada output.
// menampilkan hasil proses data mining
console.log(chalk.green(Hasil proses data mining:));
for (let i = 0; i < k; i++) {
  console.log(chalk.blue(Kluster ${i+1}:));
  console.log(result[i]);
}
