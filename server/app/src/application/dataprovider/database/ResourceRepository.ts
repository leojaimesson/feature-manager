import { Injectable } from '@nestjs/common';
import { ResourceRepository } from 'src/domain/dataprovider/database/ResourceRepository';
import { Resource } from 'src/domain/entity/Resource';
import { PrismaService } from './prisma/PrismaService';

@Injectable()
export class ResourceRepositoryImpl implements ResourceRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(resource: Resource): Promise<void> {
    await this.prismaService.resource.create({
      data: resource,
    });
  }

  async list(): Promise<Resource[]> {
    const resources = await this.prismaService.resource.findMany();
    return resources.map(
      (resource): Resource =>
        new Resource()
          .setId(resource.id)
          .setName(resource.name)
          .setEnable(resource.enable)
          .setCreatedAt(resource.createdAt)
          .setUpdatedAt(resource.updatedAt),
    );
  }
}
