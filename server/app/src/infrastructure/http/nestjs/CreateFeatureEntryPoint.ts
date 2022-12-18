import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateFeatureRequestDto } from '../../../entrypoints/dto/CreateFeatureRequestDto';
import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { FeatureRepositoryPrisma } from 'src/infrastructure/dataproviders/FeatureRepositoryPrisma';
import { CreateFeatureEntryPoint } from 'src/entrypoints/CreateFeatureEntryPoint';

@Controller()
export class CreateFeatureEntryPointNestJS {
  constructor(
    @Inject(FeatureRepositoryPrisma)
    private readonly featureRepository: FeatureRepository,
  ) {}

  @Post('features')
  async execute(@Body() body: CreateFeatureRequestDto): Promise<void> {
    const entrypoint = new CreateFeatureEntryPoint(this.featureRepository);
    await entrypoint.execute(body);
  }
}
