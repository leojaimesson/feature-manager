import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateProjectUsecase } from 'src/domain/usecase/CreateProjectUsecase';
import { CreateProjectUsecaseImpl } from '../../usecase/CreateProjectUsecase';
import { CreateProjectRequestDto } from '../dto/CreateProjectRequestDto';
import { CreateProjectMapper } from '../../mapper/CreateProjectMapper';
import { CreateProjectEntryPoint } from '../CreateProjectEntryPoint';
import { UUIDImpl } from 'src/application/adapter/implementation/uuid';

@Controller()
export class CreateProjectEntryPointImpl implements CreateProjectEntryPoint {
  constructor(
    @Inject(CreateProjectUsecaseImpl)
    private readonly createProjectUsecase: CreateProjectUsecase,
  ) {}

  @Post('projects')
  async execute(@Body() project: CreateProjectRequestDto): Promise<void> {
    await this.createProjectUsecase.execute(
      await CreateProjectMapper.toEntity(project, new UUIDImpl()),
    );
  }
}
