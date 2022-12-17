import { Inject, Injectable } from '@nestjs/common';
import { FeatureRepository } from 'src/domain/dataprovider/database/FeatureRepository';
import { Feature } from 'src/domain/entity/Feature';
import { CreateFeatureUsecase } from 'src/domain/usecase/CreateFeatureUsecase';
import { InvalidParamError } from 'src/domain/usecase/error/InvalidParamError';
import { MissingParamError } from 'src/domain/usecase/error/MissingParamError';
import { FeatureRepositoryImpl } from '../dataprovider/database/FeatureRepository';

@Injectable()
export class CreateFeatureUsecaseImpl implements CreateFeatureUsecase {
  constructor(
    @Inject(FeatureRepositoryImpl)
    private readonly featureRepository: FeatureRepository,
  ) {}
  async execute(feature: Feature, projectId: string): Promise<void> {
    if (projectId === undefined) {
      throw new MissingParamError('projectId');
    }
    if (feature.name === undefined) {
      throw new MissingParamError('name');
    }
    if (feature.description === undefined) {
      throw new MissingParamError('description');
    }
    if (feature.enable === undefined) {
      throw new MissingParamError('enable');
    }
    if (typeof feature.enable !== 'boolean') {
      throw new InvalidParamError('enable');
    }
    this.featureRepository.create(feature, projectId);
  }
}
