const documents = [
  { id: 1, content: 'Ini adalah contoh dokumen 1' },
  { id: 2, content: 'Ini adalah contoh dokumen 2 yang lebih panjang daripada dokumen 1' },
  { id: 3, content: 'Contoh dokumen 3 tidak terkait dengan dokumen 1 atau 2' }
];

function search(query) {
  const results = [];
  for (const doc of documents) {
    if (doc.content.includes(query)) {
      results.push(doc);
    }
  }
  return results;
}

console.log(search('contoh')); // mencetak semua dokumen yang mengandung kata 'contoh'
console.log(search('dokumen 1')); // mencetak dokumen 1 karena mengandung kata 'dokumen 1'
