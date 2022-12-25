import { Controller, Get, Inject } from '@nestjs/common';
import { RetrieveProjectsResponseDto } from '../../../entrypoints/dto/RetrieveProjectsResponseDto';
import { RetrieveProjectsEntryPoint } from '../../../entrypoints/RetrieveProjectsEntryPoint';
import { ProjectRepositorySQL } from 'src/infrastructure/dataproviders/ProjectRepositorySQL';
import { ProjectRepository } from 'src/domain/dataproviders/ProjectRepository';
import { API_PATHS, API_VERSION } from '../Api';

const PATH = API_PATHS[API_VERSION.V1].RETRIEVE_PROJECTS_ENTRYPOINT.PATH;

@Controller()
export class RetrieveProjectsEntryPointNestJs {
  constructor(
    @Inject(ProjectRepositorySQL)
    private readonly repository: ProjectRepository,
  ) {}

  @Get(PATH)
  async execute(): Promise<RetrieveProjectsResponseDto[]> {
    const entrypoint = new RetrieveProjectsEntryPoint(this.repository);
    return await entrypoint.execute();
  }
}
