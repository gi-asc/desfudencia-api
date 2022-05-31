import { NumberValidator } from "../adapters"
import { IValidation, NumberValidation, RequiredFieldValidation, ValidationComposite } from "../validation"

export const makeCalculateMediaValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  for (const field of ['number_1', 'number_2']) {
    validations.push(new RequiredFieldValidation(field))
    validations.push(new NumberValidation(field, new NumberValidator()))
  }
  return new ValidationComposite(validations)
}