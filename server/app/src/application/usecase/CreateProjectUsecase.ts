import { Inject, Injectable } from '@nestjs/common';
import { ProjectRepository } from 'src/domain/dataprovider/database/ProjectRepository';
import { Project } from 'src/domain/entity/Project';
import { CreateProjectUsecase } from 'src/domain/usecase/CreateProjectUsecase';
import { ProjectRepositoryImpl } from '../dataprovider/database/ProjectRepository';

@Injectable()
export class CreateProjectUsecaseImpl implements CreateProjectUsecase {
  constructor(
    @Inject(ProjectRepositoryImpl)
    private readonly projectRepository: ProjectRepository,
  ) {}
  async execute(project: Project): Promise<void> {
    this.projectRepository.create(project);
  }
}
