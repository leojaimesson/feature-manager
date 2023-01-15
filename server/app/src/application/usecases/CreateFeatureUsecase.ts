import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { Feature } from 'src/domain/models/Feature';
import { MissingParamError } from 'src/domain/errors/MissingParamError';

export class CreateFeatureUsecase {
  constructor(private readonly repository: FeatureRepository) {}
  async execute(feature: Feature, projectId: string): Promise<void> {
    if (projectId === undefined) {
      throw new MissingParamError('projectId');
    }
    this.repository.create(feature, projectId);
  }
}
