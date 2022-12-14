import { Feature } from '../entity/Feature';

export interface CreateFeatureUsecase {
  execute(feature: Feature, projectId: string): Promise<void>;
}
