import { Injectable } from '@nestjs/common';
import { ProjectRepository } from 'src/domain/dataproviders/ProjectRepository';
import { Project } from 'src/domain/models/Project';
import { PrismaService } from '../prisma/PrismaService';

@Injectable()
export class ProjectRepositorySQL implements ProjectRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(project: Project): Promise<void> {
    await this.prismaService.project.create({
      data: {
        id: project.id,
        name: project.name,
        description: project.description,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      },
    });
  }

  async list(): Promise<Project[]> {
    const listData = await this.prismaService.project.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return listData.map((data) =>
      new Project()
        .setId(data.id)
        .setName(data.name)
        .setDescription(data.description)
        .setCreateAt(data.createdAt)
        .setUpdatedAt(data.updatedAt),
    );
  }
}
