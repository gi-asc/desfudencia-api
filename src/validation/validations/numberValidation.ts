import { InvalidParamError } from "../../errors/invalidParamError"
import { INumberValidator } from "../protocols/INumberValidator"
import { IValidation } from "../IValidation"

export class NumberValidation implements IValidation {
  constructor (
    private readonly fieldName: string,
    private readonly numberValidator: INumberValidator
  ) {}

  validate (input: any): Error | null {
    const isValid = this.numberValidator.isValid(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
    return null
  }
}