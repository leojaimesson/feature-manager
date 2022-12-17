import {
  Injectable,
  HttpException as HttpExceptionNest,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { InvalidParamError } from 'src/domain/usecase/error/InvalidParamError';
import { MissingParamError } from 'src/domain/usecase/error/MissingParamError';

const BAD_REQUEST_ERRORS = [MissingParamError, InvalidParamError];

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (BAD_REQUEST_ERRORS.some((e) => error instanceof e)) {
          throw new HttpExceptionNest(error.message, HttpStatus.BAD_REQUEST);
        }
        throw error;
      }),
    );
  }
}
