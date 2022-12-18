import { UuidAdapter } from 'src/adapters/UuidAdapter';
import { ProjectRepository } from 'src/domain/dataproviders/ProjectRepository';
import { CreateProjectUsecase } from 'src/domain/usecases/CreateProjectUsecase';
import { CreateProjectRequestDto } from './dto/CreateProjectRequestDto';
import { CreateProjectMapper } from './mapper/CreateProjectMapper';

export class CreateProjectEntryPoint {
  constructor(private readonly repository: ProjectRepository) {}
  async execute(body: CreateProjectRequestDto): Promise<void> {
    const usecase = new CreateProjectUsecase(this.repository);
    await usecase.execute(
      await CreateProjectMapper.toEntity(body, new UuidAdapter()),
    );
  }
}
