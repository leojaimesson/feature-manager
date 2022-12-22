import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { FeatureRepositorySQL } from 'src/infrastructure/dataproviders/FeatureRepositorySQL';
import { ChangeFeatureFlagRequestDto } from 'src/entrypoints/dto/ChangeFeatureFlagRequestDto';
import { ChangeFeatureFlagEntryPoint } from 'src/entrypoints/ChangeFeatureFlagEntryPoint';

@Controller()
export class ChangeFeatureFlagEntryPointNestJS {
  constructor(
    @Inject(FeatureRepositorySQL)
    private readonly featureRepository: FeatureRepository,
  ) {}

  @Put('features/:featureId/change-flag')
  async execute(
    @Body() body: ChangeFeatureFlagRequestDto,
    @Param('featureId') featureId: string,
  ): Promise<void> {
    const entrypoint = new ChangeFeatureFlagEntryPoint(this.featureRepository);
    await entrypoint.execute(body, featureId);
  }
}
