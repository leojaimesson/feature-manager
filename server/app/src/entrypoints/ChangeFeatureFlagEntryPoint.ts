import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { ChangeFeatureFlagUsecase } from 'src/application/usecases/ChangeFeatureFlagUsecase';
import { ChangeFeatureFlagRequestDto } from './dto/ChangeFeatureFlagRequestDto';

export class ChangeFeatureFlagEntryPoint {
  constructor(private readonly repository: FeatureRepository) {}
  async execute(
    body: ChangeFeatureFlagRequestDto,
    featureIdParam: string,
  ): Promise<void> {
    const usecase = new ChangeFeatureFlagUsecase(this.repository);
    await usecase.execute(featureIdParam, body.enable);
  }
}
