import { CalculateMediaController } from "../../../../presentation/controllers/media"
import { CalculateMedia } from "../../../../usecases/calculateMediaUseCase"
import { makeCalculateMediaValidation } from "../../validations"

export const makeCalculateMediaController = (): CalculateMediaController => {
    const calculateMedia = new CalculateMedia()
    const validation = makeCalculateMediaValidation()
    return new CalculateMediaController(calculateMedia, validation)
}