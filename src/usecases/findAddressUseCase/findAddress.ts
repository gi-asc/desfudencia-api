import { IAddressModel } from "../../data/dtos/IAddresModel";
import { ICepRepository } from "../../infra/repositories/cep/ICepRepository";
import { IFindAddress } from "./IFindAddress";

export class FindAddress implements IFindAddress {
    constructor(private cepRepository: ICepRepository){}
    async execute(cep: string): Promise<IAddressModel> {
        const address = await this.cepRepository.findAddress(cep)
        if(address.bairro === ""){
            Object.assign(address, {
                message: "could not find the neighborhood"
            })
        }
        return address
    }

}