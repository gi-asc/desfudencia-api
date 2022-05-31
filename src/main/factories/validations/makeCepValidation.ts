import { IValidation } from "../../../presentation"
import { RequiredFieldValidation, ValidationComposite } from "../../../validation"
import { CepValidation } from "../../../validation/cep/cepValidation"
import { CepValidator } from "../../../validation/cep/cepValidator"

export const makeCepValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  validations.push(new RequiredFieldValidation('cep'))
  validations.push(new CepValidation('cep', new CepValidator()))
  return new ValidationComposite(validations)
}