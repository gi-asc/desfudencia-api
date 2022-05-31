import { makeCepValidation } from "../main"
import { InvalidParamError, MissingParamError } from "../presentation"

const validation = makeCepValidation()
describe('CepValidation', () => {
    it('should return null if the right field is present', async () => {
        const field = {
            cep: '35930030'
        }
        const response = validation.validate(field)
        expect(response).toBe(null)
    })
    it('should return a invalidParamError if valid param is not provided', async () => {
        const field = {
            cep: 'a'
        }
        const response = validation.validate(field)
        expect(response?.message).toBe(new InvalidParamError('cep').message)
    })
    it('should return a error if param is not provided', async () => {
        const field = {
            cep: ""
        }
        const response = validation.validate(field)
        expect(response?.message).toBe(new MissingParamError('cep').message)
    })
})