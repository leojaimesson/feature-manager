import { Project } from 'src/domain/models/Project';
import { CreateProjectRequestDto } from '../dto/CreateProjectRequestDto';
import { UUID } from '../../adapters/protocols/Uuid';

export class CreateProjectMapper {
  static async toEntity(
    dto: CreateProjectRequestDto,
    uuid: UUID,
  ): Promise<Project> {
    const date = new Date();
    return new Project()
      .setId(await uuid.execute())
      .setName(dto.name)
      .setDescription(dto.description)
      .setCreateAt(date)
      .setUpdatedAt(date);
  }
}
