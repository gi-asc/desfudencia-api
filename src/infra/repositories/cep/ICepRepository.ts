import { IAddressModel } from '../../../data';

export interface ICepRepository {
  findAddress(cep: string): Promise<IAddressModel>;
}
