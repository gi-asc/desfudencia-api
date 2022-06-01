import { IFindAddress } from '../../../usecases';
import { badRequest, ok, serverError } from '../../helpers';
import { HttpResponse, IController, IValidation } from '../../protocols';

export class FindAddressController implements IController {
  constructor(
    private findAddress: IFindAddress,
    private validation: IValidation
  ) {}
  async handle(request: FindAddressController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) {
        return badRequest(error);
      }
      const { cep } = request;
      const media = await this.findAddress.execute(cep);
      return ok(media, request);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}

export namespace FindAddressController {
  export type Request = {
    cep: string;
  };
}
