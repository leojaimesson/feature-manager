import { Feature } from 'src/domain/models/Feature';

export interface FeatureRepository {
  create(feature: Feature, projectId: string): Promise<void>;
  listByProject(projectId: string): Promise<Feature[]>;
}
