export class InvalidParamError extends Error {
  constructor(invalidParam: string) {
    super(`invalid param: ${invalidParam}`);
  }
}
