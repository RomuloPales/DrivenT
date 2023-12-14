import httpStatus from 'http-status';
import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import hotelsServices from '@/services/hotels-service';

export async function getAllHotels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const hotels = await hotelsServices.findHotels(Number(userId));
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getHotelWithRoom(req: AuthenticatedRequest, res: Response) {
  try {
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
