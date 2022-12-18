import { ProjectRepository } from 'src/domain/dataproviders/ProjectRepository';
import { Project } from 'src/domain/models/Project';

export class RetrieveProjectsUsecase {
  constructor(private readonly repository: ProjectRepository) {}
  async execute(): Promise<Project[]> {
    return await this.repository.list();
  }
}
