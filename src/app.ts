import express, { Express } from 'express';
import { Server } from 'http';
import { ErrorFilter } from './errors/error.filter';
import { ILogger } from './logger/logger.interface';
import { UserController } from './users/users.controller';

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: ILogger;
  userController: UserController;
  errorFilter: ErrorFilter;

  constructor(
    logger: ILogger,
    userController: UserController,
    errorFilter: ErrorFilter
  ) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
    this.errorFilter = errorFilter;
  }

  useRouters() {
    this.app.use('/user', this.userController.router);
  }

  useErrors() {
    this.app.use(this.errorFilter.catch.bind(this.errorFilter));
  }

  public async init() {
    this.useRouters();
    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
  }
}
