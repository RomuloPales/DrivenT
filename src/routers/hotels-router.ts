import { Router } from 'express';
import { getAllHotels, getHotelWithRoom } from '@/controllers';
import { authenticateToken } from '@/middlewares';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken).get('/', getAllHotels).get('/:hotelId', getHotelWithRoom);
export { hotelsRouter };
