import hotelsRepository from '@/repositories/hotels-repository';

async function findHotels(userId: number) {
  await hotelsRepository.findAllHotels(userId);
}

const hotelsServices = { findHotels };

export default hotelsServices;
