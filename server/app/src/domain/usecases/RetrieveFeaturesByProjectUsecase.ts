import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { Feature } from 'src/domain/models/Feature';

export class RetrieveFeaturesByProjectUsecase {
  constructor(private readonly repository: FeatureRepository) {}
  async execute(projectId: string): Promise<Feature[]> {
    return await this.repository.listByProject(projectId);
  }
}
