import { ProjectRepository } from 'src/domain/dataproviders/ProjectRepository';
import { RetrieveProjectsUsecase } from 'src/application/usecases/RetrieveProjectsUsecase';
import { RetrieveProjectsResponseDto } from './dto/RetrieveProjectsResponseDto';
import { RetrieveProjectsMapper } from './mapper/RetrieveProjectsMapper';

export class RetrieveProjectsEntryPoint {
  constructor(private readonly repository: ProjectRepository) {}

  async execute(): Promise<RetrieveProjectsResponseDto[]> {
    const usecase = new RetrieveProjectsUsecase(this.repository);
    return RetrieveProjectsMapper.toDtos(await usecase.execute());
  }
}
