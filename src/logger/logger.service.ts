import { Logger } from 'tslog';

export class LoggerService {
  logger: Logger;

  constructor() {
    this.logger = new Logger({
      displayFilePath: 'hidden',
      displayInstanceName: false,
      displayLoggerName: false,
      displayFunctionName: false,
    });
  }

  public log(...args: unknown[]) {
    this.logger.info(...args);
  }

  public error(...args: unknown[]) {
    this.logger.error(...args);
  }

  public warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}
