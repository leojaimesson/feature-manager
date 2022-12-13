export class Resource {
  id: number;
  name: string;
  enable: boolean;
  createdAt: Date;
  updatedAt: Date;

  setId(id: number) {
    this.id = id;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setEnable(enable: boolean) {
    this.enable = enable;
    return this;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }
}
