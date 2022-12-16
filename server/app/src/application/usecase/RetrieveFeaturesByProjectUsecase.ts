import { Inject, Injectable } from '@nestjs/common';
import { FeatureRepository } from 'src/domain/dataprovider/database/FeatureRepository';
import { Feature } from 'src/domain/entity/Feature';
import { RetrieveFeaturesByProjectUsecase } from 'src/domain/usecase/RetrieveFeaturesByProjectUsecase';
import { FeatureRepositoryImpl } from '../dataprovider/database/FeatureRepository';

@Injectable()
export class RetrieveFeaturesByProjectUsecaseImpl
  implements RetrieveFeaturesByProjectUsecase
{
  constructor(
    @Inject(FeatureRepositoryImpl)
    private readonly featureRepository: FeatureRepository,
  ) {}
  async execute(projectId: string): Promise<Feature[]> {
    return await this.featureRepository.listByProject(projectId);
  }
}
