import { IAddressModel } from '../../data/dtos/IAddressModel';

export interface IFindAddress {
  execute(cep: string): Promise<IAddressModel>;
}
