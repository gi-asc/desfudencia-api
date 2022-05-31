import { CalculateMediaController } from "../controllers"
import { CalculateMedia } from "../usecases/calculateMediaUseCase"
import { makeCalculateMediaValidation } from "./makeCalculateMediaValidator"

export const makeCalculateMediaController = (): CalculateMediaController => {
    const calculateMedia = new CalculateMedia()
    const validation = makeCalculateMediaValidation()
    return new CalculateMediaController(calculateMedia, validation)
}