import { MissingParamError } from "../presentation/errors/missingParamError"
import { IValidation } from "../presentation/protocols/IValidation"

export class RequiredFieldValidation implements IValidation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error | null {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
    return null
  }
}