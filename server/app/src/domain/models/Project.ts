import { MissingParamError } from '../errors/MissingParamError';
import { Feature } from './Feature';

export class Project {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  features?: Feature[];

  setId(id: string) {
    this.id = id;
    return this;
  }

  setName(name: string) {
    if (name === undefined) {
      throw new MissingParamError('name');
    }
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    if (description === undefined) {
      throw new MissingParamError('description');
    }
    this.description = description;
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

  setFeatures(features: Feature[]) {
    this.features = features;
    return this;
  }
}
