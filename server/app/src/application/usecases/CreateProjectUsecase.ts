import { ProjectRepository } from 'src/domain/dataproviders/ProjectRepository';
import { Project } from 'src/domain/models/Project';

export class CreateProjectUsecase {
  constructor(private readonly repository: ProjectRepository) {}
  async execute(project: Project): Promise<void> {
    this.repository.create(project);
  }
}
