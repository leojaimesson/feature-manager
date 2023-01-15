import { FeatureRepository } from '../../domain/dataproviders/FeatureRepository';
import { EntityNotFoundError } from '../../domain/errors/EntityNotFoundError';
import { MissingParamError } from '../../domain/errors/MissingParamError';
import { Feature } from '../../domain/models/Feature';

export class ChangeFeatureFlagUsecase {
  constructor(private readonly repository: FeatureRepository) {}

  async execute(featureId: string, enable: boolean): Promise<Feature> {
    if (!featureId) {
      throw new MissingParamError('featureId');
    }
    if (!(await this.repository.exists(featureId))) {
      throw new EntityNotFoundError(`feature with id ${featureId} not found`);
    }
    const feature = new Feature().setId(featureId).setEnable(enable);

    return await this.repository.update(feature);
  }
}
