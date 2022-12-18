import { Project } from 'src/domain/models/Project';
export interface ProjectRepository {
  create(project: Project): Promise<void>;
  list(): Promise<Project[]>;
}
