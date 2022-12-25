import { Feature } from 'src/domain/models/Feature';

export interface FeatureRepository {
  create(feature: Feature, projectId: string): Promise<void>;
  findById(featureId: string): Promise<Feature>;
  exists(featureId: string): Promise<boolean>;
  update(feature: Feature): Promise<Feature>;
  listByProject(projectId: string): Promise<Feature[]>;
}
