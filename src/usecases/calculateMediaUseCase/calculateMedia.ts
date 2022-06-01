import { ICalculateMedia } from '.';

export class CalculateMedia implements ICalculateMedia {
  async execute(number_1: number, number_2: number): Promise<string> {
    return ((number_1 + number_2) / 2).toFixed(2);
  }
}
