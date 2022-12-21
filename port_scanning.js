const net = require('net');

// Tujuan alamat IP dan port yang ingin di-scan
const targetHost = '127.0.0.1';
const targetPort = 80;

// Membuat socket TCP
const socket = net.createConnection({
  host: targetHost,
  port: targetPort
});

// Menangani event 'connect' yang terjadi saat terhubung ke tujuan
socket.on('connect', () => {
  console.log(`Terhubung ke ${targetHost}:${targetPort}`);
  socket.end();
});

// Menangani event 'error' yang terjadi saat tidak dapat terhubung ke tujuan
socket.on('error', (error) => {
  console.log(`Tidak dapat terhubung ke ${targetHost}:${targetPort}`);
  console.error(error);
});
