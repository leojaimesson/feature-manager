import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateProjectUsecase } from 'src/domain/usecase/CreateProjectUsecase';
import { CreateProjectUsecaseImpl } from '../usecase/CreateProjectUsecase';
import { CreateProjectRequestDto } from './dto/CreateProjectRequestDto';
import { CreateProjectMapper } from '../mapper/CreateProjectMapper';

@Controller()
export class CreateProjectEntryPoint {
  constructor(
    @Inject(CreateProjectUsecaseImpl)
    private readonly createProjectUsecase: CreateProjectUsecase,
  ) {}

  @Post('projects')
  async execute(@Body() project: CreateProjectRequestDto): Promise<void> {
    await this.createProjectUsecase.execute(
      await CreateProjectMapper.toEntity(project),
    );
  }
}
