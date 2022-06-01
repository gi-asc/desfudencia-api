import { CalculateMedia } from '../usecases';

const calculateMediaUseCase = new CalculateMedia();

describe('CalculateMedia', () => {
  it('should return the average of the two numbers passed', async () => {
    const number_1 = 12;
    const number_2 = 16;
    const response = await calculateMediaUseCase.execute(number_1, number_2);
    expect(response).toEqual((14).toFixed(2));
  });
  it('should use the Half Round Up rounding strategy with 2 decimal numbers', async () => {
    const number_1 = 12.23;
    const number_2 = 16.32;
    const response = await calculateMediaUseCase.execute(number_1, number_2);
    expect(response).toEqual((14.28).toFixed(2));
  });
});
