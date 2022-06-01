import {
  FindAddressController,
  InvalidParamError,
  IValidation,
} from '../presentation';
import { IFindAddress } from '../usecases';

const findAddress: IFindAddress = {
  execute: async () => {
    return {
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
    };
  },
};
const validation = (): IValidation => {
  return { validate: () => null };
};
const validationWithError = (): IValidation => {
  return {
    validate: () => {
      return new InvalidParamError('any');
    },
  };
};

const sutWithError = new FindAddressController(
  findAddress,
  validationWithError()
);
const sut = new FindAddressController(findAddress, validation());

describe('FindAddressController', () => {
  it('should call findAddress.execute method if valid parameters are passed', async () => {
    const request = {
      cep: '35930030',
    };
    const response = await sut.handle(request);
    expect(response.statusCode).toEqual(200);
  });
  it('should return an error if validation returns an error', async () => {
    const request = {
      cep: '35930030',
    };
    const response = await sutWithError.handle(request);
    expect(response.statusCode).toEqual(400);
  });
  it('should return 500 if a server error occurs', async () => {
    jest.spyOn(findAddress, 'execute').mockImplementationOnce(async () => {
      throw new Error();
    });
    const request = {
      cep: '35930030',
    };
    const response = await sut.handle(request);
    expect(response.statusCode).toEqual(500);
  });
});
