import express, {Request, Response, NextFunction} from 'express';
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

app.use((req, res, next) => {
  console.log('Date time ', Date.now())
  next();
})

app.get('/hello', (req, res) => {
  // res.send('Привет от GET')
  throw new Error("ERRORRRRR!!!!")
})

app.use('/user', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(401).send(err.message)
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