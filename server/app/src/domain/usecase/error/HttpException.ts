export class HttpException extends Error {
  status: number;

  constructor(message = '', status) {
    super(message);
    this.status = status;
    this.name = 'HttpException';
  }
}

export enum HttpStatusCode {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}
