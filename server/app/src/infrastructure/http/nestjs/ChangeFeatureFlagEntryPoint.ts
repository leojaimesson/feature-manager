import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { FeatureRepositorySQL } from 'src/infrastructure/dataproviders/FeatureRepositorySQL';
import { ChangeFeatureFlagRequestDto } from 'src/entrypoints/dto/ChangeFeatureFlagRequestDto';
import { ChangeFeatureFlagEntryPoint } from 'src/entrypoints/ChangeFeatureFlagEntryPoint';
import { API_PATHS, API_VERSION } from '../Api';

const PATH = API_PATHS[API_VERSION.V1].CHANGE_FEATURE_FLAG_ENTRYPOINT.PATH;

const FEATURE_ID_PARAM =
  API_PATHS[API_VERSION.V1].CHANGE_FEATURE_FLAG_ENTRYPOINT.PARAMS.FEATURE_ID;

@Controller()
export class ChangeFeatureFlagEntryPointNestJS {
  constructor(
    @Inject(FeatureRepositorySQL)
    private readonly featureRepository: FeatureRepository,
  ) {}

  @Put(PATH)
  async execute(
    @Body() body: ChangeFeatureFlagRequestDto,
    @Param(FEATURE_ID_PARAM)
    featureId: string,
  ): Promise<void> {
    const entrypoint = new ChangeFeatureFlagEntryPoint(this.featureRepository);
    await entrypoint.execute(body, featureId);
  }
}
