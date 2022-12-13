import { Resource } from '../entity/Resource';

export interface RetrieveResourcesUsecase {
  execute(): Promise<Resource[]>;
}
