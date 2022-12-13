import { Inject, Injectable } from '@nestjs/common';
import { ResourceRepository } from 'src/domain/dataprovider/database/ResourceRepository';
import { Resource } from 'src/domain/entity/Resource';
import { RetrieveResourcesUsecase } from 'src/domain/usecase/RetrieveResourcesUsecase';
import { ResourceRepositoryImpl } from '../dataprovider/database/ResourceRepository';

@Injectable()
export class RetrieveResourcesUsecaseImpl implements RetrieveResourcesUsecase {
  constructor(
    @Inject(ResourceRepositoryImpl)
    private readonly resourceRepository: ResourceRepository,
  ) {}
  async execute(): Promise<Resource[]> {
    return await this.resourceRepository.list();
  }
}
