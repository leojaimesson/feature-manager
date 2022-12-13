import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateResourceUsecase } from 'src/domain/usecase/CreateResourceUsecase';
import { CreateResourceUsecaseImpl } from '../usecase/CreateResourceUsecase';
import { CreateResourceRequestDto } from './dto/CreateResourceRequestDto';
import { CreateResourceMapper } from '../mapper/CreateResourceMapper';

@Controller()
export class CreateResourceEntryPoint {
  constructor(
    @Inject(CreateResourceUsecaseImpl)
    private readonly createResourceUsecase: CreateResourceUsecase,
  ) {}

  @Post('resources')
  async execute(@Body() resource: CreateResourceRequestDto): Promise<void> {
    await this.createResourceUsecase.execute(
      CreateResourceMapper.toEntity(resource),
    );
  }
}
