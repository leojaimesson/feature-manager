import { Project } from "../../domain/models/Project";

export interface ProjectGateway {
  getProjects(): Promise<Project[]>;
}
