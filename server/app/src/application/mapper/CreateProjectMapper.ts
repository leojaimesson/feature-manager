import { Project } from 'src/domain/entity/Project';
import { CreateProjectRequestDto } from '../entrypoint/dto/CreateProjectRequestDto';
import { UUIDImpl } from '../infra/adapter/impl/uuid';

export class CreateProjectMapper {
  static async toEntity(dto: CreateProjectRequestDto): Promise<Project> {
    const uuid = new UUIDImpl();
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
