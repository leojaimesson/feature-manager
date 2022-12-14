import { Feature } from '../entity/Feature';

export interface RetrieveFeaturesUsecase {
  execute(): Promise<Feature[]>;
}
