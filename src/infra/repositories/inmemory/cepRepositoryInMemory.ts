import { IAddressModel } from '../../../data';
import { ICepRepository } from '../cep';

export class CepRepositoryInMemory implements ICepRepository {
  address: IAddressModel[] = [
    {
      cep: '35930-040',
      logradouro: 'Rua Venezuela',
      complemento: '',
      bairro: 'Nossa Senhora da Conceição',
      localidade: 'João Monlevade',
      uf: 'MG',
      ibge: '3136207',
      gia: '',
      ddd: '31',
      siafi: '4723',
    },
  ];
  async findAddress(cep: string): Promise<IAddressModel> {
    return this.address[0];
  }
}
