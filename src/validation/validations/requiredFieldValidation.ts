import { IValidation } from '../IValidation'
import { MissingParamError } from '../../errors/missingParamError'

export class RequiredFieldValidation implements IValidation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error | null {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
    return null
  }
}