import { Injectable } from '@nestjs/common';
import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { Feature } from 'src/domain/models/Feature';
import { PrismaService } from '../prisma/PrismaService';

@Injectable()
export class FeatureRepositorySQL implements FeatureRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(feature: Feature, projectId: string): Promise<void> {
    await this.prismaService.feature.create({
      data: {
        ...feature,
        projectId,
      },
    });
  }

  async listByProject(projectId: string): Promise<Feature[]> {
    const listData = await this.prismaService.feature.findMany({
      where: {
        projectId,
      },
    });

    return listData.map((data) =>
      new Feature()
        .setId(data.id)
        .setName(data.name)
        .setDescription(data.description)
        .setEnable(data.enable)
        .setCreateAt(data.createdAt)
        .setUpdatedAt(data.updatedAt),
    );
  }
}
