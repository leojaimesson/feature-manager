import { Inject, Injectable } from '@nestjs/common';
import { FeatureRepository } from 'src/domain/dataprovider/database/FeatureRepository';
import { Feature } from 'src/domain/entity/Feature';
import { CreateFeatureUsecase } from 'src/domain/usecase/CreateFeatureUsecase';
import { FeatureRepositoryImpl } from '../dataprovider/database/FeatureRepository';

@Injectable()
export class CreateFeatureUsecaseImpl implements CreateFeatureUsecase {
  constructor(
    @Inject(FeatureRepositoryImpl)
    private readonly featureRepository: FeatureRepository,
  ) {}
  async execute(feature: Feature): Promise<void> {
    this.featureRepository.create(feature);
  }
}
