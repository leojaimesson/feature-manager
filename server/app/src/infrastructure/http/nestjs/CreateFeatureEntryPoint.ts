import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateFeatureRequestDto } from '../../../entrypoints/dto/CreateFeatureRequestDto';
import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { FeatureRepositorySQL } from 'src/infrastructure/dataproviders/FeatureRepositorySQL';
import { CreateFeatureEntryPoint } from 'src/entrypoints/CreateFeatureEntryPoint';
import { API_PATHS, API_VERSION } from '../Api';

const PATH = API_PATHS[API_VERSION.V1].CREATE_FEATURE_ENTRYPOINT.PATH;
@Controller()
export class CreateFeatureEntryPointNestJS {
  constructor(
    @Inject(FeatureRepositorySQL)
    private readonly featureRepository: FeatureRepository,
  ) {}

  @Post(PATH)
  async execute(@Body() body: CreateFeatureRequestDto): Promise<void> {
    const entrypoint = new CreateFeatureEntryPoint(this.featureRepository);
    await entrypoint.execute(body);
  }
}
