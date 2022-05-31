import { InvalidParamError, IValidation } from "../../presentation"
import { ICepValidator } from "../protocols/ICepValidator"

export class CepValidation implements IValidation {
  constructor (
    private readonly fieldName: string,
    private readonly cepValidator: ICepValidator
  ) {}

  validate (input: any): Error | null {
    const isValid = this.cepValidator.isValid(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
    return null
  }
}