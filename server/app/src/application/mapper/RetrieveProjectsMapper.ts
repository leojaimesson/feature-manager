import { Project } from 'src/domain/entity/Project';
import { RetrieveProjectsResponseDto } from '../entrypoint/dto/RetrieveProjectsResponseDto';

export class RetrieveProjectsMapper {
  static async toDtos(
    projects: Project[],
  ): Promise<RetrieveProjectsResponseDto[]> {
    return projects.map(
      (project): RetrieveProjectsResponseDto => ({
        name: project.name,
        description: project.description,
      }),
    );
  }
}
