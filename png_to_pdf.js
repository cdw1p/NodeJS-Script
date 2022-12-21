const fs = require('fs');
const PDFDocument = require('pdf-lib').PDFDocument;

async function pngToPdf(pngPath, pdfPath) {
  // Baca file PNG
  const pngBuffer = fs.readFileSync(pngPath);

  // Buat PDFDocument baru
  const pdfDoc = new PDFDocument();

  // Tambahkan gambar ke PDFDocument
  const pngImage = await pdfDoc.embedPNG(pngBuffer);

  // Tambahkan halaman baru ke PDFDocument
  const page = pdfDoc.addPage([pngImage.width, pngImage.height]);

  // Tempelkan gambar ke halaman
  page.drawImage(pngImage, {
    x: 0,
    y: 0,
    width: pngImage.width,
    height: pngImage.height,
  });

  // Generate buffer dari PDFDocument
  const pdfBuffer = await pdfDoc.save();

  // Tulis buffer ke file PDF
  fs.writeFileSync(pdfPath, pdfBuffer);
}

pngToPdf('input.png', 'output.pdf');
