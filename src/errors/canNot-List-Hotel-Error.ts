import { ApplicationError } from '@/protocols';

export function canNotListHotelError(): ApplicationError {
  return {
    name: 'canNotListHotelError',
    message: 'Cannot List Hotels!',
  };
}
