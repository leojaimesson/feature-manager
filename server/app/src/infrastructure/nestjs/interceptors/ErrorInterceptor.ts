import {
  Injectable,
  HttpException as HttpExceptionNest,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { EmptyStringError } from 'src/domain/errors/EmptyStringError';
import { EntityNotFoundError } from 'src/domain/errors/EntityNotFoundError';
import { InvalidParamError } from 'src/domain/errors/InvalidParamError';
import { MissingParamError } from 'src/domain/errors/MissingParamError';

const BAD_REQUEST_ERRORS = [
  MissingParamError,
  InvalidParamError,
  EmptyStringError,
];

const NOT_FOUND = [EntityNotFoundError];

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (BAD_REQUEST_ERRORS.some((e) => error instanceof e)) {
          throw new HttpExceptionNest(error.message, HttpStatus.BAD_REQUEST);
        }
        if (NOT_FOUND.some((e) => error instanceof e)) {
          throw new HttpExceptionNest(error.message, HttpStatus.NOT_FOUND);
        }
        throw error;
      }),
    );
  }
}
