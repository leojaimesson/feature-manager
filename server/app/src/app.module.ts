import { Module } from '@nestjs/common';
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
export class AppModule {}
