import {
  Injectable,
  HttpException as HttpExceptionNest,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { HttpException } from 'src/domain/usecase/error/HttpException';

@Injectable()
export class HttpExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof HttpException) {
          throw new HttpExceptionNest(error.message, error.status);
        } else {
          throw error;
        }
      }),
    );
  }
}
