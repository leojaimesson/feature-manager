import { CreateProjectRequestDto } from './dto/CreateProjectRequestDto';

export interface CreateProjectEntryPoint {
  execute(project: CreateProjectRequestDto): Promise<void>;
}
