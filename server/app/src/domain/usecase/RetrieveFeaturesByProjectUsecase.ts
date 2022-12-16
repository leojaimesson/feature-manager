import { Feature } from '../entity/Feature';

export interface RetrieveFeaturesByProjectUsecase {
  execute(projectId: string): Promise<Feature[]>;
}
