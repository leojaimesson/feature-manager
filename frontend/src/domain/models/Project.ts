import { Feature } from "./Feature";

export class Project {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    features?: Feature[]
  ) {}
}
