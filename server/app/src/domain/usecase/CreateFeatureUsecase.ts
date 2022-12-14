import { Feature } from '../entity/Feature';

export interface CreateFeatureUsecase {
  execute(feature: Feature): Promise<void>;
}
