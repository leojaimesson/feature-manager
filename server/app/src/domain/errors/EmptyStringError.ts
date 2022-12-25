export class EmptyStringError extends Error {
  constructor(paramName: string) {
    super(`Empty string: ${paramName}`);
    this.name = 'EmptyStringError';
  }
}
