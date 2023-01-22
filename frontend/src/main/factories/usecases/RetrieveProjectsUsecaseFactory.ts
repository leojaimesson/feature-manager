import { RetrieveProjectsUsecase } from "../../../usecases/RetrieveProjectsUsecase";
import { makeProjectHttpGateway } from "../gateway/ProjectHttpGatewayFactory";

export function makeRetrieveProjectsUsecase() {
  return new RetrieveProjectsUsecase(makeProjectHttpGateway());
}
