import { IValidation } from "../../presentation"
import { InvalidParamError } from "../../presentation"
import { INumberValidator } from "../protocols"

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