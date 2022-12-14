import { Inject, Injectable } from '@nestjs/common';
import { ProjectRepository } from 'src/domain/dataprovider/database/ProjectRepository';
import { Project } from 'src/domain/entity/Project';
import { RetrieveProjectsUsecase } from 'src/domain/usecase/RetrieveProjectsUsecase';
import { ProjectRepositoryImpl } from '../dataprovider/database/ProjectRepository';

@Injectable()
export class RetrieveProjectsUsecaseImpl implements RetrieveProjectsUsecase {
  constructor(
    @Inject(ProjectRepositoryImpl)
    private readonly projectRepository: ProjectRepository,
  ) {}
  async execute(): Promise<Project[]> {
    return await this.projectRepository.list();
  }
}
