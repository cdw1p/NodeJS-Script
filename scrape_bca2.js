const axios = require('axios');
const htmlParser = require('html-parser');

axios.get('https://www.bca.co.id/id/kurs-sukubunga/kurs_counter_bca/kurs_counter_bca_landing.jsp')
  .then((response) => {
    let html = response.data;
    let dom = htmlParser.parse(html);
    let kursJual = dom.find('.kurs_jual_bca').text;
    console.log(`Kurs jual BCA: ${kursJual}`);

    let kursBeli = dom.find('.kurs_beli_bca').text;
    console.log(`Kurs beli BCA: ${kursBeli}`);
  })
  .catch((error) => {
    console.log(error);
  });
