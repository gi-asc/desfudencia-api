import { badRequest, ok, serverError } from "../../helpers"
import { HttpResponse, IController, IValidation } from "../.."
import { ICalculateMedia } from "../../../usecases/calculateMediaUseCase"

export class CalculateMediaController implements IController{
    constructor(private calculateMedia: ICalculateMedia, private validation: IValidation){}

    async handle(request: CalculateMediaController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if (error) {
              return badRequest(error)
            }
            const { number_1, number_2 } = request
            const media = await this.calculateMedia.execute(number_1, number_2)
            return ok(media, request)
        } catch(error){
            return serverError(error as Error)
        }
    }
}

export namespace CalculateMediaController {
  export type Request = {
    number_1: number
    number_2: number
  }
}