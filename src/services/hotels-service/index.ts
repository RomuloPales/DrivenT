import { notFoundError } from '@/errors';
import { canNotListHotelError } from '@/errors/canNot-List-Hotel-Error';
import enrollmentRepository from '@/repositories/enrollment-repository';
import hotelsRepository from '@/repositories/hotels-repository';
import ticketsRepository from '@/repositories/tickets-repository';

async function listHotel(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findUserTicketsByEnrollmentId(enrollment.id);
  if (!ticket || ticket.status === 'RESERVED' || ticket.TicketType.isRemote || ticket.TicketType.includesHotel) {
    throw canNotListHotelError();
  }
}

async function findHotels(userId: number) {
  await listHotel(userId);

  const hotels = await hotelsRepository.findAllHotels();
  return hotels;
}

async function findHotelWithRooms(userId: number, hotelId: number) {
  await listHotel(userId);
  const hotelAndRooms = await hotelsRepository.findHotelAndRooms(hotelId);
  if (!hotelAndRooms) throw notFoundError();
  return hotelAndRooms;
}

const hotelsServices = { findHotels, listHotel, findHotelWithRooms };

export default hotelsServices;
