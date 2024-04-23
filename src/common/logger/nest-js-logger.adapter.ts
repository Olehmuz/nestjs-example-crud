import { ILoggerService } from './logger.inteface';
import { Logger as NestJsLogger } from '@nestjs/common';

export class Logger implements ILoggerService {
  public logger;
  constructor() {
    this.logger = new NestJsLogger();
  }
  error(message: string) {
    this.logger.error(message);
  }
  warn(message: string) {
    this.logger.warn(message);
  }
  info(message) {
    this.logger.log(message);
  }
}

export function LogDecorator() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${key} with arguments`, args);
      const result = originalMethod.apply(this, args);
      console.log(`${key} returned`, result);
      return result;
    };

    return descriptor;
  };
}
