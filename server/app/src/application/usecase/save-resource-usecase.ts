import { Inject, Injectable } from '@nestjs/common';
import { ResourceRepository } from 'src/domain/dataprovider/database/resource-repository';
import { Resource } from 'src/domain/entity/resource';
import { SaveResourceUsecase } from 'src/domain/usecase/save-resource-usecase';
import { ResourceRepositoryImpl } from '../dataprovider/database/resource-repository';

@Injectable()
export class SaveResourceUsecaseImpl implements SaveResourceUsecase {
  constructor(
    @Inject(ResourceRepositoryImpl)
    private readonly resourceRepository: ResourceRepository,
  ) {}
  async execute(resource: Resource): Promise<void> {
    this.resourceRepository.save(resource);
  }
}
