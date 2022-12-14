import { Inject, Injectable } from '@nestjs/common';
import { FeatureRepository } from 'src/domain/dataprovider/database/FeatureRepository';
import { Feature } from 'src/domain/entity/Feature';
import { RetrieveFeaturesUsecase } from 'src/domain/usecase/RetrieveFeaturesUsecase';
import { FeatureRepositoryImpl } from '../dataprovider/database/FeatureRepository';

@Injectable()
export class RetrieveFeaturesUsecaseImpl implements RetrieveFeaturesUsecase {
  constructor(
    @Inject(FeatureRepositoryImpl)
    private readonly featureRepository: FeatureRepository,
  ) {}
  async execute(): Promise<Feature[]> {
    return await this.featureRepository.list();
  }
}
