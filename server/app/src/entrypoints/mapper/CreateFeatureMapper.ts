import { Feature } from 'src/domain/models/Feature';
import { CreateFeatureRequestDto } from '../dto/CreateFeatureRequestDto';
import { UUID } from '../../adapters/protocols/Uuid';

export class CreateFeatureMapper {
  static async toEntity(
    dto: CreateFeatureRequestDto,
    uuid: UUID,
  ): Promise<Feature> {
    const date = new Date();
    return new Feature()
      .setId(await uuid.execute())
      .setName(dto.name)
      .setDescription(dto.description)
      .setEnable(false)
      .setCreateAt(date)
      .setUpdatedAt(date);
  }
}
