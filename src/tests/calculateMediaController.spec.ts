import { CalculateMediaController } from "../controllers"
import { InvalidParamError, MissingParamError } from "../errors"
import { serverError } from "../helpers"
import { ICalculateMedia } from "../usecases/calculateMediaUseCase"
import { IValidation } from "../validation"

const calculateMedia = (): ICalculateMedia => {
        return {execute: async ()=> ""}
}
const validation = (): IValidation => {
    return { validate: ()=> null}
}
const validationWithError = (): IValidation => {
    return { validate: ()=> {return new InvalidParamError('any')}}
}

const sutWithError = new CalculateMediaController(calculateMedia(), validationWithError())
const sut = new CalculateMediaController(calculateMedia(),validation())

describe('CalculateMediaController', ()=>{
    it('should call calculateMedia.execute method if valid parameters are passed', async ()=>{
        const request = {
            number_1: 12,
            number_2: 13
        }
        const response = await sut.handle(request)
        expect(response.statusCode).toEqual(200)
    })
    it('should return an error if validation returns an error', async () => {
        const request = {
            number_1: 12,
            number_2: 13
        }
        const response = await sutWithError.handle(request)
        expect(response.statusCode).toEqual(400)
    })
    it("should return 500 if a server error occurs", async () => {
        const spy = jest.spyOn(sut, 'handle').mockImplementationOnce(async ()=>{
            return serverError(new Error())
        })
        const request = {
            number_1: 12,
            number_2: 13
        }
        const response = await sut.handle(request)
        expect(response.statusCode).toEqual(500)
    })
})