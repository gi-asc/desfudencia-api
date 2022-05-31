import { IAddressModel } from "../../data/dtos";

export interface IFindAddress {
    execute(cep: string): Promise<IAddressModel>
}