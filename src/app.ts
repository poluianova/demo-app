import express, { Express } from 'express';
import { Server } from 'http';
import { userRouter } from './users/users';

export class App {
  app: Express;
  port: number;
  server: Server;

  constructor() {
    this.app = express();
    this.port = 8000;
  }

  useRouters() {
    this.app.use('/user', userRouter);
  }

  public async init() {
    this.useRouters();
    this.server = this.app.listen(this.port);
    console.log(`Сервер запущен на http://localhost:${this.port}`);
  }
}
