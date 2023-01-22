import { Project } from "../domain/models/Project";
import { ProjectGateway } from "../gateway/interfaces/ProjectGateway";

export class RetrieveProjectsUsecase {
  constructor(private readonly projectGateway: ProjectGateway) {}

  async execute(): Promise<Project[]> {
    return this.projectGateway.getProjects();
  }
}
