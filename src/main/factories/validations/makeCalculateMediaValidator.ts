import { IValidation } from "../../../presentation"
import { NumberValidation, RequiredFieldValidation, ValidationComposite } from "../../../validation"
import { NumberValidator } from "../../../validation/media"

export const makeCalculateMediaValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  for (const field of ['number_1', 'number_2']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new NumberValidation('number_1', new NumberValidator()))
  validations.push(new NumberValidation('number_2', new NumberValidator()))
  return new ValidationComposite(validations)
}