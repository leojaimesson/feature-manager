import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Resource } from 'src/domain/entity/resource';
import { SaveResourceUsecase } from 'src/domain/usecase/save-resource-usecase';
import { SaveResourceUsecaseImpl } from '../usecase/save-resource-usecase';

@Controller('resources')
export class ResourceEntryPoint {
  constructor(
    @Inject(SaveResourceUsecaseImpl)
    private readonly saveResourceUsecase: SaveResourceUsecase,
  ) {}
  @Post()
  async createResource(@Body() resource: Resource): Promise<void> {
    await this.saveResourceUsecase.execute(resource);
  }
}
