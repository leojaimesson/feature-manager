import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateProjectRequestDto } from '../../../entrypoints/dto/CreateProjectRequestDto';
import { CreateProjectEntryPoint } from '../../../entrypoints/CreateProjectEntryPoint';
import { ProjectRepositorySQL } from 'src/infrastructure/dataproviders/ProjectRepositorySQL';
import { ProjectRepository } from 'src/domain/dataproviders/ProjectRepository';
import { API_PATHS, API_VERSION } from '../Api';

const PATH = API_PATHS[API_VERSION.V1].CREATE_PROJECT_ENTRYPOINT.PATH;

@Controller()
export class CreateProjectEntryPointNestJs {
  constructor(
    @Inject(ProjectRepositorySQL)
    private readonly repository: ProjectRepository,
  ) {}

  @Post(PATH)
  async execute(@Body() body: CreateProjectRequestDto): Promise<void> {
    const entrypoint = new CreateProjectEntryPoint(this.repository);
    await entrypoint.execute(body);
  }
}
