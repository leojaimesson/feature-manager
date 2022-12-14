import { Project } from 'src/domain/entity/Project';

export interface ProjectRepository {
  create(project: Project): Promise<void>;
  list(): Promise<Project[]>;
}
