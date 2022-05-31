import { HttpResponse } from "../protocols/http";

export interface IController<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}