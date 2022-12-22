import { Injectable } from '@nestjs/common';
import { FeatureRepository } from 'src/domain/dataproviders/FeatureRepository';
import { Feature } from 'src/domain/models/Feature';
import { PrismaService } from '../prisma/PrismaService';

type DraftData = {
  name?: string;
  description?: string;
  enable?: boolean;
  updatedAt?: Date;
};

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

  async findById(featureId: string): Promise<Feature> {
    const data = await this.prismaService.feature.findUnique({
      where: {
        id: featureId,
      },
    });
    return new Feature()
      .setId(data.id)
      .setName(data.name)
      .setDescription(data.description)
      .setEnable(data.enable)
      .setCreateAt(data.createdAt)
      .setUpdatedAt(data.updatedAt);
  }

  async update(feature: Feature): Promise<Feature> {
    const draftData: DraftData = {};
    if (feature.name) {
      draftData.name = feature.name;
    }
    if (feature.description) {
      draftData.description = feature.description;
    }
    if (feature.enable) {
      draftData.enable = feature.enable;
    }
    draftData.updatedAt = new Date();

    const updateFeature = await this.prismaService.feature.update({
      where: {
        id: feature.id,
      },
      data: {
        ...draftData,
      },
    });
    return new Feature()
      .setId(updateFeature.id)
      .setName(updateFeature.name)
      .setDescription(updateFeature.description)
      .setEnable(updateFeature.enable)
      .setCreateAt(updateFeature.createdAt)
      .setUpdatedAt(updateFeature.updatedAt);
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
