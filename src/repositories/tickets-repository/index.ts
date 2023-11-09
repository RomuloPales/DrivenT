import { prisma } from '@/config';

async function findAllTicketTypes() {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  findAllTicketTypes,
};

export default ticketsRepository;
