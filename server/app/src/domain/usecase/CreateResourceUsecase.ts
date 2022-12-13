import { Resource } from '../entity/Resource';

export interface CreateResourceUsecase {
  execute(resource: Resource): Promise<void>;
}
