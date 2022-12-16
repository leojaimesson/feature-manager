import { Controller, Get, Inject, Param } from '@nestjs/common';
import { RetrieveFeaturesByProjectUsecaseImpl } from '../../usecase/RetrieveFeaturesByProjectUsecase';
import { RetrieveFeaturesByProjectUsecase } from 'src/domain/usecase/RetrieveFeaturesByProjectUsecase';
import { RetrieveFeaturesByProjectMapper } from '../../mapper/RetrieveFeaturesByProjectMapper';
import { RetrieveFeaturesByProjectResponseDto } from '../dto/RetrieveFeaturesByProjectResponseDto';
import { RetrieveFeaturesByProjectEntryPoint } from '../RetrieveFeaturesByProjectEntryPoint';

@Controller()
export class RetrieveFeaturesByProjectEntryPointImpl
  implements RetrieveFeaturesByProjectEntryPoint
{
  constructor(
    @Inject(RetrieveFeaturesByProjectUsecaseImpl)
    private readonly retrieveFeaturesByProjectUsecase: RetrieveFeaturesByProjectUsecase,
  ) {}

  @Get('projects/:projectId/features')
  async execute(
    @Param('projectId') projectId: string,
  ): Promise<RetrieveFeaturesByProjectResponseDto[]> {
    return RetrieveFeaturesByProjectMapper.toDtos(
      await this.retrieveFeaturesByProjectUsecase.execute(projectId),
    );
  }
}
