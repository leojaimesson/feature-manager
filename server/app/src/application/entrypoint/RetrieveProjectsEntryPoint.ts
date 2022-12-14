import { RetrieveProjectsResponseDto } from './dto/RetrieveProjectsResponseDto';

export interface RetrieveProjectsEntryPoint {
  execute(): Promise<RetrieveProjectsResponseDto[]>;
}
