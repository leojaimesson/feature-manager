import { Resource } from 'src/domain/entity/resource';

export interface ResourceRepository {
  save(resource: Resource): Promise<void>;
}
