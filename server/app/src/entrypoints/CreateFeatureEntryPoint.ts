import { UuidAdapter } from 'src/adapters/UuidAdapter';
import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { CreateFeatureUsecase } from 'src/domain/usecases/CreateFeatureUsecase';
import { CreateFeatureRequestDto } from './dto/CreateFeatureRequestDto';
import { CreateFeatureMapper } from './mapper/CreateFeatureMapper';

export class CreateFeatureEntryPoint {
  constructor(private readonly repository: FeatureRepository) {}
  async execute(body: CreateFeatureRequestDto): Promise<void> {
    const usecase = new CreateFeatureUsecase(this.repository);
    await usecase.execute(
      await CreateFeatureMapper.toEntity(body, new UuidAdapter()),
      body.projectId,
    );
  }
}
