import { randomUUID } from 'crypto';
import { UUID } from './protocols/Uuid';

export class UuidAdapter implements UUID {
  async execute(): Promise<string> {
    return randomUUID();
  }
}
