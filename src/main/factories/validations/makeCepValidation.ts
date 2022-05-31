import { IValidation } from "../../../presentation"
import { CepValidation, CepValidator, RequiredFieldValidation, ValidationComposite } from "../../../validation"

export const makeCepValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  validations.push(new RequiredFieldValidation('cep'))
  validations.push(new CepValidation('cep', new CepValidator()))
  return new ValidationComposite(validations)
}