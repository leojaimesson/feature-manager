import { EmptyStringError } from '../errors/EmptyStringError';
import { InvalidParamError } from '../errors/InvalidParamError';
import { MissingParamError } from '../errors/MissingParamError';

export class Feature {
  id: string;
  name: string;
  description: string;
  enable: boolean;
  createdAt: Date;
  updatedAt: Date;

  setId(id: string) {
    this.id = id;
    return this;
  }

  setName(name: string) {
    if (name === undefined) {
      throw new MissingParamError('name');
    }
    if (name === '') {
      throw new EmptyStringError('name');
    }
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    if (description === undefined) {
      throw new MissingParamError('description');
    }
    if (description === '') {
      throw new EmptyStringError('description');
    }
    this.description = description;
    return this;
  }

  setEnable(enable: boolean) {
    if (enable === undefined) {
      throw new MissingParamError('enable');
    }
    if (typeof enable !== 'boolean') {
      throw new InvalidParamError('enable');
    }
    this.enable = enable;
    return this;
  }

  setCreateAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }
}
