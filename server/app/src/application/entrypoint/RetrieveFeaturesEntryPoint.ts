import { RetrieveFeaturesResponseDto } from './dto/RetrieveFeaturesResponseDto';

export interface RetrieveFeaturesEntryPoint {
  execute(): Promise<RetrieveFeaturesResponseDto[]>;
}
