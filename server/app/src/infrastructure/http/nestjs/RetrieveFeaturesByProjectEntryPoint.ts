import { Controller, Get, Inject, Param } from '@nestjs/common';
import { RetrieveFeaturesByProjectResponseDto } from '../../../entrypoints/dto/RetrieveFeaturesByProjectResponseDto';
import { FeatureRepositoryPrisma } from 'src/infrastructure/dataproviders/FeatureRepositoryPrisma';
import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { RetrieveFeaturesByProjectEntryPoint } from 'src/entrypoints/RetrieveFeaturesByProjectEntryPoint';

@Controller()
export class RetrieveFeaturesByProjectEntryPointNestJs {
  constructor(
    @Inject(FeatureRepositoryPrisma)
    private readonly repository: FeatureRepository,
  ) {}

  @Get('projects/:projectId/features')
  async execute(
    @Param('projectId') projectId: string,
  ): Promise<RetrieveFeaturesByProjectResponseDto[]> {
    const entrypoint = new RetrieveFeaturesByProjectEntryPoint(this.repository);
    return await entrypoint.execute(projectId);
  }
}
