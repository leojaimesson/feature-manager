import { Project } from '../entity/Project';

export interface RetrieveProjectsUsecase {
  execute(): Promise<Project[]>;
}
