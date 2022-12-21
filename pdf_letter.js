const PDFDocument = require('pdfkit');

// Buat document baru
const doc = new PDFDocument();

// Tambahkan judul ke document
doc.fontSize(25).text('Contoh Surat', {
  underline: true
});

// Tambahkan tanggal ke document
doc.fontSize(10).text(`Tanggal: ${new Date().toLocaleDateString()}`);

// Tambahkan teks ke document
doc.text('Surat ini adalah contoh surat PDF yang dibuat dengan PDFKit.');

// Tambahkan tanda tangan ke document
doc.fontSize(10).text('Tanda Tangan', {
  align: 'right'
});

// Simpan document ke file
doc.pipe(fs.createWriteStream('surat.pdf'));
doc.end();
