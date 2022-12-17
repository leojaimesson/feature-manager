import { Module } from '@nestjs/common';
import {
  dataproviders,
  entrypoints,
  interceptors,
  usecases,
} from './application/config/NestDI';

@Module({
  imports: [],
  controllers: [...entrypoints],
  providers: [...dataproviders, ...usecases, ...interceptors],
})
export class AppModule {}
