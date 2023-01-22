import { AxiosAdpter } from "../../../infrastructure/http/AxiosAdapter";

export function makeAxiosAdapterFactory() {
  return new AxiosAdpter();
}
