import { AxiosInstance } from 'axios';
import api from '../../../config/cep';
import { IAddressModel } from '../../../data';
import { ICepRepository } from './ICepRepository';

export class CepRepository implements ICepRepository {
  private _request: AxiosInstance;

  constructor() {
    this._request = api;
  }

  async findAddress(cep: string): Promise<IAddressModel> {
    return (await this._request.get(`/${cep}/json`))['data'];
  }
}
