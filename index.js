import express from 'express';

const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
  res.send('Привет!')
})

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`)
})

// import http from 'http';

// const host = '127.0.0.1';
// const port = 8000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Привет');
// })

// server.listen(port, host, () => {
//   console.log(`Сервер запущен на ${host}:${port}`);
// })