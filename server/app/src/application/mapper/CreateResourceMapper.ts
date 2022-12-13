import { Resource } from 'src/domain/entity/Resource';
import { CreateResourceRequestDto } from '../entrypoint/dto/CreateResourceRequestDto';

export class CreateResourceMapper {
  static toEntity(dto: CreateResourceRequestDto): Resource {
    const resource = new Resource();
    const date = new Date();
    return resource
      .setName(dto.name)
      .setEnable(dto.enable)
      .setCreatedAt(date)
      .setUpdatedAt(date);
  }
}
