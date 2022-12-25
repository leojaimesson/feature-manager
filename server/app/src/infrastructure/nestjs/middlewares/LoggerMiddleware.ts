import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const logs = [
      `---`,
      new Date().toLocaleString(),
      '',
      `[PATH]: ${req.url}`,
      `[METHOD]: ${req.method}`,
      `[HEADERS]: ${JSON.stringify(req.headers)}`,
      `[QUERY]: ${JSON.stringify(req.query)}`,
      `[PARAMS]: ${JSON.stringify(req.params)}`,
      `[BODY]: ${JSON.stringify(req.body)}`,
      '---',
    ];
    console.log(logs.join('\n'));
    next();
  }
}
