import { Feature } from 'src/domain/entity/Feature';
import { RetrieveFeaturesResponseDto } from '../entrypoint/dto/RetrieveFeaturesResponseDto';

export class RetrieveFeaturesMapper {
  static async toDtos(
    features: Feature[],
  ): Promise<RetrieveFeaturesResponseDto[]> {
    return features.map(
      (feature): RetrieveFeaturesResponseDto => ({
        enable: feature.enable,
        name: feature.name,
        description: feature.description,
      }),
    );
  }
}
