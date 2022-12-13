import { Controller, Get, Inject } from '@nestjs/common';
import { RetrieveResourcesUsecaseImpl } from '../usecase/RetrieveResourcesUsecase';
import { RetrieveResourcesUsecase } from 'src/domain/usecase/RetrieveResourcesUsecase';
import { RetrieveResourcesMapper } from '../mapper/RetrieveResourcesMapper';
import { RetrieveResourcesResponseDto } from './dto/RetrieveResourcesResponseDto';

@Controller()
export class RetrieveResourcesEntryPoint {
  constructor(
    @Inject(RetrieveResourcesUsecaseImpl)
    private readonly retrieveResourcesUsecase: RetrieveResourcesUsecase,
  ) {}

  @Get('resources')
  async execute(): Promise<RetrieveResourcesResponseDto[]> {
    return RetrieveResourcesMapper.toDtos(
      await this.retrieveResourcesUsecase.execute(),
    );
  }
}
