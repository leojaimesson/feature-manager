import { Controller, Get, Inject } from '@nestjs/common';
import { RetrieveProjectsUsecaseImpl } from '../../usecase/RetrieveProjectsUsecase';
import { RetrieveProjectsUsecase } from 'src/domain/usecase/RetrieveProjectsUsecase';
import { RetrieveProjectsMapper } from '../../mapper/RetrieveProjectsMapper';
import { RetrieveProjectsResponseDto } from '../dto/RetrieveProjectsResponseDto';
import { RetrieveProjectsEntryPoint } from '../RetrieveProjectsEntryPoint';

@Controller()
export class RetrieveProjectsEntryPointImpl
  implements RetrieveProjectsEntryPoint
{
  constructor(
    @Inject(RetrieveProjectsUsecaseImpl)
    private readonly retrieveProjectsUsecase: RetrieveProjectsUsecase,
  ) {}

  @Get('projects')
  async execute(): Promise<RetrieveProjectsResponseDto[]> {
    return RetrieveProjectsMapper.toDtos(
      await this.retrieveProjectsUsecase.execute(),
    );
  }
}
