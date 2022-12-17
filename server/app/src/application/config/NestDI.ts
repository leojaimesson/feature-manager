import { PrismaService } from '../dataprovider/database/prisma/PrismaService';
import { FeatureRepositoryImpl } from '../dataprovider/database/FeatureRepository';
import { CreateFeatureUsecaseImpl } from '../usecase/CreateFeatureUsecase';
import { RetrieveFeaturesUsecaseImpl } from '../usecase/RetrieveFeaturesUsecase';
import { CreateFeatureEntryPointImpl } from '../entrypoint/implementation/CreateFeatureEntryPoint';
import { RetrieveFeaturesEntryPointImpl } from '../entrypoint/implementation/RetrieveFeaturesEntryPoint';
import { CreateProjectEntryPointImpl } from '../entrypoint/implementation/CreateProjectEntryPoint';
import { ProjectRepositoryImpl } from '../dataprovider/database/ProjectRepository';
import { CreateProjectUsecaseImpl } from '../usecase/CreateProjectUsecase';
import { RetrieveProjectsEntryPointImpl } from '../entrypoint/implementation/RetrieveProjectsEntryPoint';
import { RetrieveProjectsUsecaseImpl } from '../usecase/RetrieveProjectsUsecase';
import { RetrieveFeaturesByProjectEntryPointImpl } from '../entrypoint/implementation/RetrieveFeaturesByProjectEntryPoint';
import { RetrieveFeaturesByProjectUsecaseImpl } from '../usecase/RetrieveFeaturesByProjectUsecase';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionInterceptor } from './HttpExceptionInterceptor';

export const entrypoints = [
  CreateFeatureEntryPointImpl,
  RetrieveFeaturesEntryPointImpl,
  CreateProjectEntryPointImpl,
  RetrieveProjectsEntryPointImpl,
  RetrieveFeaturesByProjectEntryPointImpl,
];
export const dataproviders = [
  PrismaService,
  FeatureRepositoryImpl,
  ProjectRepositoryImpl,
];
export const usecases = [
  CreateFeatureUsecaseImpl,
  RetrieveFeaturesUsecaseImpl,
  CreateProjectUsecaseImpl,
  RetrieveProjectsUsecaseImpl,
  RetrieveFeaturesByProjectUsecaseImpl,
];

export const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: HttpExceptionInterceptor,
  },
];
