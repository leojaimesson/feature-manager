import { Feature } from 'src/domain/entity/Feature';
import { CreateFeatureRequestDto } from '../entrypoint/dto/CreateFeatureRequestDto';
import { UUIDImpl } from '../infra/adapter/impl/uuid';

export class CreateFeatureMapper {
  static async toEntity(dto: CreateFeatureRequestDto): Promise<Feature> {
    const uuid = new UUIDImpl();
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
