import { CepRepository } from "../../../../infra/repositories/cep/cepRepository"
import { FindAddressController } from "../../../../presentation/controllers/cep/findAddressController"
import { FindAddress } from "../../../../usecases/findAddressUseCase/findAddress"
import { makeCepValidation } from "../../validations/makeCepValidation"

export const makeFindAddressController = (): FindAddressController => {
    const validation = makeCepValidation()
    const cepRepository = new CepRepository()
    const findAddress = new FindAddress(cepRepository)
    return new FindAddressController(findAddress, validation)
}