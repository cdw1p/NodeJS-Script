const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function pdfToPng(pdfPath, pngPath) {
  // Baca file PDF
  const pdfBuffer = fs.readFileSync(pdfPath);

  // Buka PDFDocument
  const pdfDoc = await PDFDocument.load(pdfBuffer);

  // Ambil halaman pertama
  const page = pdfDoc.getPages()[0];

  // Render halaman pertama ke gambar
  const pngImage = await page.render({ format: 'png' });

  // Generate buffer dari gambar
  const pngBuffer = await pngImage.save();

  // Tulis buffer ke file PNG
  fs.writeFileSync(pngPath, pngBuffer);
}

pdfToPng('input.pdf', 'output.png');
