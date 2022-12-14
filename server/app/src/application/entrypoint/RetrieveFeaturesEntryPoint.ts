import { Controller, Get, Inject } from '@nestjs/common';
import { RetrieveFeaturesUsecaseImpl } from '../usecase/RetrieveFeaturesUsecase';
import { RetrieveFeaturesUsecase } from 'src/domain/usecase/RetrieveFeaturesUsecase';
import { RetrieveFeaturesMapper } from '../mapper/RetrieveFeaturesMapper';
import { RetrieveFeaturesResponseDto } from './dto/RetrieveFeaturesResponseDto';

@Controller()
export class RetrieveFeaturesEntryPoint {
  constructor(
    @Inject(RetrieveFeaturesUsecaseImpl)
    private readonly retrieveFeaturesUsecase: RetrieveFeaturesUsecase,
  ) {}

  @Get('features')
  async execute(): Promise<RetrieveFeaturesResponseDto[]> {
    return RetrieveFeaturesMapper.toDtos(
      await this.retrieveFeaturesUsecase.execute(),
    );
  }
}
