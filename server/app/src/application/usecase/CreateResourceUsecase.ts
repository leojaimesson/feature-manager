import { Inject, Injectable } from '@nestjs/common';
import { ResourceRepository } from 'src/domain/dataprovider/database/ResourceRepository';
import { Resource } from 'src/domain/entity/Resource';
import { CreateResourceUsecase } from 'src/domain/usecase/CreateResourceUsecase';
import { ResourceRepositoryImpl } from '../dataprovider/database/ResourceRepository';

@Injectable()
export class CreateResourceUsecaseImpl implements CreateResourceUsecase {
  constructor(
    @Inject(ResourceRepositoryImpl)
    private readonly resourceRepository: ResourceRepository,
  ) {}
  async execute(resource: Resource): Promise<void> {
    this.resourceRepository.create(resource);
  }
}
