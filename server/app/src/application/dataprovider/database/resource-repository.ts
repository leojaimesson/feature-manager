import { Injectable } from '@nestjs/common';
import { ResourceRepository } from 'src/domain/dataprovider/database/resource-repository';
import { Resource } from 'src/domain/entity/resource';

@Injectable()
export class ResourceRepositoryImpl implements ResourceRepository {
  async save(resource: Resource): Promise<void> {
    console.log(resource);
  }
}
