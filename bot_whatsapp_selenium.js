const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const notifier = require('node-notifier');

// Membuat objek webdriver
let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();

// Menggunakan webdriver untuk mengakses halaman login Whatsapp Web
driver.get('https://web.whatsapp.com/');

// Menunggu hingga halaman selesai dimuat
driver.wait(until.titleIs('WhatsApp Web'), 10000);

// Menunggu hingga QR code muncul
driver.wait(until.elementLocated(By.css('#app > div.landing-wrapper > div > div.qr-wrapper > img')), 10000);

// Menampilkan notifikasi untuk memindai QR code
notifier.notify({
  title: 'WhatsApp Bot',
  message: 'Silakan memindai QR code yang muncul di browser'
});

// Menunggu hingga user sudah memindai QR code
driver.wait(until.elementLocated(By.css('#app > div.app-wrapper > div > div.app > div > div.app-header > div > div.app-header-left > div')), 60000);

// Menampilkan notifikasi bahwa bot sudah terhubung
notifier.notify({
  title: 'WhatsApp Bot',
  message: 'Bot sudah terhubung ke Whatsapp Web'
});

// Mencari dan mengirim pesan ke kontak dengan nama "John Doe"
driver.findElement(By.css('[title="John Doe"]')).click();
driver.findElement(By.css('#main > footer > div._3pkkz > div._1Plpp > div > div._2S1VP.copyable-text.selectable-text')).sendKeys('Halo, ini adalah pesan dari bot Whatsapp Web!');
driver.findElement(By.css('#main > footer > div._3pkkz > div._1Plpp > div > button')).click();

// Menampilkan notifikasi bahwa pesan telah terkirim
notifier.notify({
  title: 'WhatsApp Bot',
  message: 'Pesan telah terkirim ke John Doe'
});

// Menutup browser
driver.quit();
