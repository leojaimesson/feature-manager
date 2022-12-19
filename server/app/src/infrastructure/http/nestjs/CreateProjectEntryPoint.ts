import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateProjectRequestDto } from '../../../entrypoints/dto/CreateProjectRequestDto';
import { CreateProjectEntryPoint } from '../../../entrypoints/CreateProjectEntryPoint';
import { ProjectRepositorySQL } from 'src/infrastructure/dataproviders/ProjectRepositorySQL';
import { ProjectRepository } from 'src/domain/dataproviders/ProjectRepository';

@Controller()
export class CreateProjectEntryPointNestJs {
  constructor(
    @Inject(ProjectRepositorySQL)
    private readonly repository: ProjectRepository,
  ) {}

  @Post('projects')
  async execute(@Body() body: CreateProjectRequestDto): Promise<void> {
    const entrypoint = new CreateProjectEntryPoint(this.repository);
    await entrypoint.execute(body);
  }
}
