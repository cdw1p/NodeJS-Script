const request = require('request');
const cheerio = require('cheerio');

request('https://www.bca.co.id/id/kurs-sukubunga/kurs_counter_bca/kurs_counter_bca_landing.jsp', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    // Mendapatkan kurs jual BCA
    let kursJual = $('#kurs_jual_bca').text();
    console.log(`Kurs jual BCA: ${kursJual}`);

    // Mendapatkan kurs beli BCA
    let kursBeli = $('#kurs_beli_bca').text();
    console.log(`Kurs beli BCA: ${kursBeli}`);
  }
});
