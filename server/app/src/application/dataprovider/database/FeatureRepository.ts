import { Injectable } from '@nestjs/common';
import { FeatureRepository } from 'src/domain/dataprovider/database/FeatureRepository';
import { Feature } from 'src/domain/entity/Feature';
import { PrismaService } from './prisma/PrismaService';

@Injectable()
export class FeatureRepositoryImpl implements FeatureRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(feature: Feature): Promise<void> {
    await this.prismaService.feature.create({
      data: feature,
    });
  }

  async list(): Promise<Feature[]> {
    const resources = await this.prismaService.feature.findMany();
    return resources;
    // return resources.map(
    //   (resource): Resource =>
    //     new Resource()
    //       .setId(resource.id)
    //       .setName(resource.name)
    //       .setEnable(resource.enable)
    //       .setCreatedAt(resource.createdAt)
    //       .setUpdatedAt(resource.updatedAt),
    // );
  }
}
