import { App } from './app';
import { ErrorFilter } from './errors/error.filter';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';

async function bootstrap() {
  const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger),
    new ErrorFilter(logger)
  );
  await app.init();
}

bootstrap();
