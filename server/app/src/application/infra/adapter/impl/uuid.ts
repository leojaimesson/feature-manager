import { randomUUID } from 'crypto';
import { UUID } from '../uuid';

export class UUIDImpl implements UUID {
  async execute(): Promise<string> {
    return randomUUID();
  }
}
