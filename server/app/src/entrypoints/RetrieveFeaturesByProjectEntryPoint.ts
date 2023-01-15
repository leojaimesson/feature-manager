import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { RetrieveFeaturesByProjectUsecase } from 'src/application/usecases/RetrieveFeaturesByProjectUsecase';
import { RetrieveFeaturesByProjectResponseDto } from './dto/RetrieveFeaturesByProjectResponseDto';
import { RetrieveFeaturesByProjectMapper } from './mapper/RetrieveFeaturesByProjectMapper';

export class RetrieveFeaturesByProjectEntryPoint {
  constructor(private readonly repository: FeatureRepository) {}
  async execute(
    projectIdParam: string,
  ): Promise<RetrieveFeaturesByProjectResponseDto[]> {
    const usecase = new RetrieveFeaturesByProjectUsecase(this.repository);
    return RetrieveFeaturesByProjectMapper.toDtos(
      await usecase.execute(projectIdParam),
    );
  }
}
