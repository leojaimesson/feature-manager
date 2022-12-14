import { PrismaService } from '../dataprovider/database/prisma/PrismaService';
import { FeatureRepositoryImpl } from '../dataprovider/database/FeatureRepository';
import { CreateFeatureEntryPoint } from '../entrypoint/CreateFeatureEntryPoint';
import { RetrieveFeaturesEntryPoint } from '../entrypoint/RetrieveFeaturesEntryPoint';
import { CreateFeatureUsecaseImpl } from '../usecase/CreateFeatureUsecase';
import { RetrieveFeaturesUsecaseImpl } from '../usecase/RetrieveFeaturesUsecase';

export const entrypoints = [
  CreateFeatureEntryPoint,
  RetrieveFeaturesEntryPoint,
];
export const dataproviders = [PrismaService, FeatureRepositoryImpl];
export const usecases = [CreateFeatureUsecaseImpl, RetrieveFeaturesUsecaseImpl];
