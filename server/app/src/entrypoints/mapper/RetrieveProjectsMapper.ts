import { Project } from 'src/domain/models/Project';
import { RetrieveProjectsResponseDto } from '../dto/RetrieveProjectsResponseDto';

export class RetrieveProjectsMapper {
  static async toDtos(
    projects: Project[],
  ): Promise<RetrieveProjectsResponseDto[]> {
    return projects.map(
      (project): RetrieveProjectsResponseDto => ({
        id: project.id,
        name: project.name,
        description: project.description,
      }),
    );
  }
}
