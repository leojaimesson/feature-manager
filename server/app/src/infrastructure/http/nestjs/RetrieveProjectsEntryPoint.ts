import { Controller, Get, Inject } from '@nestjs/common';
import { RetrieveProjectsResponseDto } from '../../../entrypoints/dto/RetrieveProjectsResponseDto';
import { RetrieveProjectsEntryPoint } from '../../../entrypoints/RetrieveProjectsEntryPoint';
import { ProjectRepositorySQL } from 'src/infrastructure/dataproviders/ProjectRepositorySQL';
import { ProjectRepository } from 'src/domain/dataproviders/ProjectRepository';

@Controller()
export class RetrieveProjectsEntryPointNestJs {
  constructor(
    @Inject(ProjectRepositorySQL)
    private readonly repository: ProjectRepository,
  ) {}

  @Get('projects')
  async execute(): Promise<RetrieveProjectsResponseDto[]> {
    const entrypoint = new RetrieveProjectsEntryPoint(this.repository);
    return await entrypoint.execute();
  }
}
