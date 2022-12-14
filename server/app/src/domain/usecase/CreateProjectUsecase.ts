import { Project } from '../entity/Project';

export interface CreateProjectUsecase {
  execute(project: Project): Promise<void>;
}
