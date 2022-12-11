import { Resource } from '../entity/resource';

export interface SaveResourceUsecase {
  execute(resource: Resource): Promise<void>;
}
