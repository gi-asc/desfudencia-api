import { IAddressModel } from "../../data/dtos/IAddresModel";

export interface IFindAddress {
    execute(cep: string): Promise<IAddressModel>
}