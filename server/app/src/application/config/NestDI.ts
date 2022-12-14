import { PrismaService } from '../dataprovider/database/prisma/PrismaService';
import { FeatureRepositoryImpl } from '../dataprovider/database/FeatureRepository';
import { CreateFeatureUsecaseImpl } from '../usecase/CreateFeatureUsecase';
import { RetrieveFeaturesUsecaseImpl } from '../usecase/RetrieveFeaturesUsecase';
import { CreateFeatureEntryPointImpl } from '../entrypoint/implementation/CreateFeatureEntryPoint';
import { RetrieveFeaturesEntryPointImpl } from '../entrypoint/implementation/RetrieveFeaturesEntryPoint';
import { CreateProjectEntryPointImpl } from '../entrypoint/implementation/CreateProjectEntryPoint';
import { ProjectRepositoryImpl } from '../dataprovider/database/ProjectRepository';
import { CreateProjectUsecaseImpl } from '../usecase/CreateProjectUsecase';

export const entrypoints = [
  CreateFeatureEntryPointImpl,
  RetrieveFeaturesEntryPointImpl,
  CreateProjectEntryPointImpl,
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
];
