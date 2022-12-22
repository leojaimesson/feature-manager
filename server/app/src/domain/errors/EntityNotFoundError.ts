export class EntityNotFoundError extends Error {
  constructor(description: string) {
    super(`Entity not found: ${description}`);
    this.name = 'EntityNotFoundError';
  }
}
