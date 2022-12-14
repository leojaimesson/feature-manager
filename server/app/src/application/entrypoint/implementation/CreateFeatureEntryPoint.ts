import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateFeatureUsecase } from 'src/domain/usecase/CreateFeatureUsecase';
import { CreateFeatureUsecaseImpl } from '../../usecase/CreateFeatureUsecase';
import { CreateFeatureRequestDto } from '../dto/CreateFeatureRequestDto';
import { CreateFeatureMapper } from '../../mapper/CreateFeatureMapper';
import { CreateFeatureEntryPoint } from '../CreateFeatureEntryPoint';

@Controller()
export class CreateFeatureEntryPointImpl implements CreateFeatureEntryPoint {
  constructor(
    @Inject(CreateFeatureUsecaseImpl)
    private readonly createFeatureUsecase: CreateFeatureUsecase,
  ) {}

  @Post('features')
  async execute(@Body() feature: CreateFeatureRequestDto): Promise<void> {
    await this.createFeatureUsecase.execute(
      await CreateFeatureMapper.toEntity(feature),
    );
  }
}
