import { Module } from '@nestjs/common';
import {
  dataproviders,
  entrypoints,
  usecases,
} from './application/config/nest-di';

@Module({
  imports: [],
  controllers: [...entrypoints],
  providers: [...dataproviders, ...usecases],
})
export class AppModule {}
