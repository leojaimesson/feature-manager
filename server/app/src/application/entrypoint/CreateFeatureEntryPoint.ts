import { CreateFeatureRequestDto } from './dto/CreateFeatureRequestDto';

export interface CreateFeatureEntryPoint {
  execute(feature: CreateFeatureRequestDto): Promise<void>;
}
