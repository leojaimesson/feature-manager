import { Feature } from 'src/domain/entity/Feature';
import { RetrieveFeaturesByProjectResponseDto } from '../entrypoint/dto/RetrieveFeaturesByProjectResponseDto';

export class RetrieveFeaturesByProjectMapper {
  static async toDtos(
    features: Feature[],
  ): Promise<RetrieveFeaturesByProjectResponseDto[]> {
    return features.map(
      (feature): RetrieveFeaturesByProjectResponseDto => ({
        id: feature.id,
        enable: feature.enable,
        name: feature.name,
        description: feature.description,
      }),
    );
  }
}
