import { Feature } from 'src/domain/entity/Feature';
import { CreateFeatureRequestDto } from '../entrypoint/dto/CreateFeatureRequestDto';
import { UUID } from '../adapter/uuid';

export class CreateFeatureMapper {
  static async toEntity(
    dto: CreateFeatureRequestDto,
    uuid: UUID,
  ): Promise<Feature> {
    const date = new Date();
    return {
      id: await uuid.execute(),
      name: dto.name,
      description: dto.description,
      enable: dto.enable,
      createdAt: date,
      updatedAt: date,
    };
  }
}
