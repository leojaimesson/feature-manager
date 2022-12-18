import { Feature } from 'src/domain/models/Feature';
import { RetrieveFeaturesByProjectResponseDto } from '../dto/RetrieveFeaturesByProjectResponseDto';

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
