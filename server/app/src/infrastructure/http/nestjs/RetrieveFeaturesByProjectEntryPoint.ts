import { Controller, Get, Inject, Param } from '@nestjs/common';
import { RetrieveFeaturesByProjectResponseDto } from '../../../entrypoints/dto/RetrieveFeaturesByProjectResponseDto';
import { FeatureRepositorySQL } from 'src/infrastructure/dataproviders/FeatureRepositorySQL';
import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { RetrieveFeaturesByProjectEntryPoint } from 'src/entrypoints/RetrieveFeaturesByProjectEntryPoint';
import { API_PATHS, API_VERSION } from '../Api';

const PATH =
  API_PATHS[API_VERSION.V1].RETRIEVE_FEATURES_BY_PROJECT_ENTRYPOINT.PATH;

const PROJECT_ID_PARAM =
  API_PATHS[API_VERSION.V1].RETRIEVE_FEATURES_BY_PROJECT_ENTRYPOINT.PARAMS
    .PROJECT_ID;

@Controller()
export class RetrieveFeaturesByProjectEntryPointNestJs {
  constructor(
    @Inject(FeatureRepositorySQL)
    private readonly repository: FeatureRepository,
  ) {}

  @Get(PATH)
  async execute(
    @Param(PROJECT_ID_PARAM) projectId: string,
  ): Promise<RetrieveFeaturesByProjectResponseDto[]> {
    const entrypoint = new RetrieveFeaturesByProjectEntryPoint(this.repository);
    return await entrypoint.execute(projectId);
  }
}
