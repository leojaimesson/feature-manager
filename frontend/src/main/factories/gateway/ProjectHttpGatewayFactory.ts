import { ProjectHttpGateway } from "../../../gateway/ProjectHttpGateway";
import { makeAxiosAdapterFactory } from "../http/AxiosAdapterFactory";

export function makeProjectHttpGateway() {
  return new ProjectHttpGateway(
    makeAxiosAdapterFactory(),
    "http://localhost:4000/api/v1"
  );
}
