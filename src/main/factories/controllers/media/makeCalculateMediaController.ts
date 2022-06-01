import { CalculateMediaController } from '../../../../presentation';
import { CalculateMedia } from '../../../../usecases';
import { makeCalculateMediaValidation } from '../../validations';

export const makeCalculateMediaController = (): CalculateMediaController => {
  const calculateMedia = new CalculateMedia();
  const validation = makeCalculateMediaValidation();
  return new CalculateMediaController(calculateMedia, validation);
};
