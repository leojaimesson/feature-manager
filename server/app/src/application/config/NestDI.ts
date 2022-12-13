import { PrismaService } from '../dataprovider/database/prisma/PrismaService';
import { ResourceRepositoryImpl } from '../dataprovider/database/ResourceRepository';
import { CreateResourceEntryPoint } from '../entrypoint/CreateResourceEntryPoint';
import { RetrieveResourcesEntryPoint } from '../entrypoint/RetrieveResourcesEntryPoint';
import { CreateResourceUsecaseImpl } from '../usecase/CreateResourceUsecase';
import { RetrieveResourcesUsecaseImpl } from '../usecase/RetrieveResourcesUsecase';

export const entrypoints = [
  CreateResourceEntryPoint,
  RetrieveResourcesEntryPoint,
];
export const dataproviders = [PrismaService, ResourceRepositoryImpl];
export const usecases = [
  CreateResourceUsecaseImpl,
  RetrieveResourcesUsecaseImpl,
];
