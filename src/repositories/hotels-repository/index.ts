import { prisma } from '@/config';

async function findAllHotels() {
  return prisma.hotel.findMany();
}

async function findHotelAndRooms(hotelId: number) {
  return prisma.hotel.findFirst({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    },
  });
}
const hotelsRepository = { findAllHotels, findHotelAndRooms };

export default hotelsRepository;
