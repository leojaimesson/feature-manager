import { Feature } from 'src/domain/models/Feature';

export interface FeatureRepository {
  create(feature: Feature, projectId: string): Promise<void>;
  findById(featureId: string): Promise<Feature>;
  update(feature: Feature): Promise<Feature>;
  listByProject(projectId: string): Promise<Feature[]>;
}
