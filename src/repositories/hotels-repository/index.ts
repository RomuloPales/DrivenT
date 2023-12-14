import { prisma } from '@/config';

async function findAllHotels() {
  return prisma.hotel.findMany();
}

const hotelsRepository = { findAllHotels };

export default hotelsRepository;
