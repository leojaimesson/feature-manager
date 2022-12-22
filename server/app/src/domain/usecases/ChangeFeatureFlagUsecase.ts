import { FeatureRepository } from '../dataproviders/FeatureRepository';
import { EntityNotFoundError } from '../errors/EntityNotFoundError';
import { MissingParamError } from '../errors/MissingParamError';
import { Feature } from '../models/Feature';

export class ChangeFeatureFlagUsecase {
  constructor(private readonly repository: FeatureRepository) {}

  async execute(featureId: string, enable: boolean): Promise<Feature> {
    if (!featureId) {
      throw new MissingParamError('featureId');
    }
    if (!(await this.repository.findById(featureId))) {
      throw new EntityNotFoundError(`feature with id ${featureId} not found`);
    }
    const feature = new Feature().setId(featureId).setEnable(enable);

    return await this.repository.update(feature);
  }
}
