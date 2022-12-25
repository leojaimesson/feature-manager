import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './infrastructure/nestjs/middlewares/LoggerMiddleware';
import {
  dataproviders,
  entrypoints,
  interceptors,
} from './infrastructure/nestjs/NestDI';

@Module({
  imports: [],
  controllers: [...entrypoints],
  providers: [...dataproviders, ...interceptors],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
