import { Injectable } from '@nestjs/common';
import { ProjectRepository } from 'src/domain/dataprovider/database/ProjectRepository';
import { Project } from 'src/domain/entity/Project';
import { PrismaService } from './prisma/PrismaService';

@Injectable()
export class ProjectRepositoryImpl implements ProjectRepository {
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
    return await this.prismaService.project.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
