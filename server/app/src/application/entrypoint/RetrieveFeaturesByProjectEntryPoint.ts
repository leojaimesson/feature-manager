import { RetrieveFeaturesResponseDto } from './dto/RetrieveFeaturesResponseDto';

export interface RetrieveFeaturesByProjectEntryPoint {
  execute(projectId: string): Promise<RetrieveFeaturesResponseDto[]>;
}
