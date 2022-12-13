import { Resource } from 'src/domain/entity/Resource';

export interface ResourceRepository {
  create(resource: Resource): Promise<void>;
  list(): Promise<Resource[]>;
}
