import { InvalidParamError, MissingParamError } from "../errors"
import { makeCalculateMediaValidation } from "../factories"

const validation = makeCalculateMediaValidation()
describe('RequiredFieldsValidation', () => {
    it('should return null if the right field is present', async () => {
        const field = {
            number_1: 10,
            number_2: 10
        }
        const response = validation.validate(field)
        expect(response).toBe(null)
    })
    it('should return a invalidParamError if valid param is not provided', async () => {
        const field = {
            number_1: 10,
            number_2: 'any'
        }
        const response = validation.validate(field)
        expect(response?.message).toBe(new InvalidParamError('number_2').message)
    })
    it('should return a error if param is not provided', async () => {
        const field = {
            number_1: 10,
        }
        const response = validation.validate(field)
        expect(response?.message).toBe(new MissingParamError('number_2').message)
    })
})