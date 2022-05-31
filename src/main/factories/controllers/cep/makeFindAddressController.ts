import { CepRepository } from "../../../../infra"
import { FindAddressController } from "../../../../presentation"
import { FindAddress } from "../../../../usecases"
import { makeCepValidation } from "../../validations"

export const makeFindAddressController = (): FindAddressController => {
    const validation = makeCepValidation()
    const cepRepository = new CepRepository()
    const findAddress = new FindAddress(cepRepository)
    return new FindAddressController(findAddress, validation)
}