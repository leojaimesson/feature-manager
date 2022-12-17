import { Project } from 'src/domain/entity/Project';
import { CreateProjectRequestDto } from '../entrypoint/dto/CreateProjectRequestDto';
import { UUID } from '../adapter/uuid';

export class CreateProjectMapper {
  static async toEntity(
    dto: CreateProjectRequestDto,
    uuid: UUID,
  ): Promise<Project> {
    const date = new Date();
    return {
      id: await uuid.execute(),
      name: dto.name,
      description: dto.description,
      createdAt: date,
      updatedAt: date,
    };
  }
}
