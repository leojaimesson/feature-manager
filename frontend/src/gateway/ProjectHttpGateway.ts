import { Project } from "../domain/models/Project";
import { HttpClient } from "../infrastructure/http/interfaces/HttpClient";
import { ProjectGateway } from "./interfaces/ProjectGateway";

export class ProjectHttpGateway implements ProjectGateway {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly baseUrl: string
  ) {}

  async getProjects(): Promise<Project[]> {
    const response = await this.httpClient.get<Project[]>(
      `${this.baseUrl}/projects`
    );
    return response;
  }
}
