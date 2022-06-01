import { CepRepositoryInMemory } from '../infra/repositories/inmemory/cepRepositoryInMemory';
import { FindAddress } from '../usecases';

const repository = new CepRepositoryInMemory();
const findAddressUsecase = new FindAddress(repository);

describe('CalculateMedia', () => {
  it('should return the average of the two numbers passed', async () => {
    const cep = '35930040';
    const response = await findAddressUsecase.execute(cep);
    expect(response.cep).toEqual('35930-040');
  });
  it('should return an error message if the neighborhood comes empty', async () => {
    const cep = '35930040';
    const spy = jest
      .spyOn(repository, 'findAddress')
      .mockImplementationOnce(async (cep) => {
        return {
          cep: '35930-040',
          logradouro: 'Rua Venezuela',
          complemento: '',
          bairro: '',
          localidade: 'João Monlevade',
          uf: 'MG',
          ibge: '3136207',
          gia: '',
          ddd: '31',
          siafi: '4723',
        };
      });
    const response = await findAddressUsecase.execute(cep);
    const expetedMessage = Object.assign(response, {
      message: 'could not find the neighborhood',
    });
    expect(response).toEqual(expetedMessage);
  });
});
