import { Resource } from 'src/domain/entity/Resource';
import { RetrieveResourcesResponseDto } from '../entrypoint/dto/RetrieveResourcesResponseDto';

export class RetrieveResourcesMapper {
  static async toDtos(
    resources: Resource[],
  ): Promise<RetrieveResourcesResponseDto[]> {
    return resources.map(
      (resource): RetrieveResourcesResponseDto => ({
        enable: resource.enable,
        name: resource.name,
      }),
    );
  }
}
