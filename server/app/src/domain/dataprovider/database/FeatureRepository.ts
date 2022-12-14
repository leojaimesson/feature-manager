import { Feature } from 'src/domain/entity/Feature';

export interface FeatureRepository {
  create(feature: Feature): Promise<void>;
  list(): Promise<Feature[]>;
}
