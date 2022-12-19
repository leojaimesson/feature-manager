import { PrismaService } from '../prisma/PrismaService';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorInterceptor } from './interceptors/ErrorInterceptor';
import { CreateFeatureEntryPointNestJS } from '../http/nestjs/CreateFeatureEntryPoint';
import { CreateProjectEntryPointNestJs } from '../http/nestjs/CreateProjectEntryPoint';
import { RetrieveFeaturesByProjectEntryPointNestJs } from '../http/nestjs/RetrieveFeaturesByProjectEntryPoint';
import { RetrieveProjectsEntryPointNestJs } from '../http/nestjs/RetrieveProjectsEntryPoint';
import { FeatureRepositorySQL } from '../dataproviders/FeatureRepositorySQL';
import { ProjectRepositorySQL } from '../dataproviders/ProjectRepositorySQL';

export const entrypoints = [
  CreateFeatureEntryPointNestJS,
  CreateProjectEntryPointNestJs,
  RetrieveFeaturesByProjectEntryPointNestJs,
  RetrieveProjectsEntryPointNestJs,
];
export const dataproviders = [
  PrismaService,
  FeatureRepositorySQL,
  ProjectRepositorySQL,
];

export const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ErrorInterceptor,
  },
];
