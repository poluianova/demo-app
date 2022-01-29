import express from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

// app.all('/hello', (req, res, next) => {
//   console.log('ALL');
//   next();
// })

// app.route('/user')
//   .get('/hello', (req, res) => {
//     res.send('Привет, GET!')
//   })
//   .post('/hello', (req, res) => {
//     console.log('POST');
//     res.send('Привет, POST')
//   })

app.get('/hello', (req, res) => {
  res.send('Привет от GET')
})

app.use('/user', userRouter);

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