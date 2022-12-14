import { Feature } from 'src/domain/entity/Feature';

export interface FeatureRepository {
  create(feature: Feature, projectId: string): Promise<void>;
  list(): Promise<Feature[]>;
}
