import { PrismaService } from '../prisma/PrismaService';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorInterceptor } from './interceptors/ErrorInterceptor';
import { CreateFeatureEntryPointNestJS } from '../http/nestjs/CreateFeatureEntryPoint';
import { CreateProjectEntryPointNestJs } from '../http/nestjs/CreateProjectEntryPoint';
import { RetrieveFeaturesByProjectEntryPointNestJs } from '../http/nestjs/RetrieveFeaturesByProjectEntryPoint';
import { RetrieveProjectsEntryPointNestJs } from '../http/nestjs/RetrieveProjectsEntryPoint';
import { FeatureRepositoryPrisma } from '../dataproviders/FeatureRepositoryPrisma';
import { ProjectRepositoryPrisma } from '../dataproviders/ProjectRepositoryPrisma';

export const entrypoints = [
  CreateFeatureEntryPointNestJS,
  CreateProjectEntryPointNestJs,
  RetrieveFeaturesByProjectEntryPointNestJs,
  RetrieveProjectsEntryPointNestJs,
];
export const dataproviders = [
  PrismaService,
  FeatureRepositoryPrisma,
  ProjectRepositoryPrisma,
];

export const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ErrorInterceptor,
  },
];
