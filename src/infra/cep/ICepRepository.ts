import { IAddressModel } from "../../data/dtos";

export interface ICepRepository {
    findAddress(cep: string): Promise<IAddressModel>
}