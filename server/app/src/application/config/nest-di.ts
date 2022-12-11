import { ResourceRepositoryImpl } from '../dataprovider/database/resource-repository';
import { ResourceEntryPoint } from '../entrypoint/ResourceEntryPoint';
import { SaveResourceUsecaseImpl } from '../usecase/save-resource-usecase';

export const entrypoints = [ResourceEntryPoint];
export const dataproviders = [ResourceRepositoryImpl];
export const usecases = [SaveResourceUsecaseImpl];
