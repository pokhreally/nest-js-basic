import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException('No Authorization Found', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
