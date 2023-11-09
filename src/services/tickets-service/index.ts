import ticketsRepository from '@/repositories/tickets-repository';

async function findTicketsTypes() {
  const ticketsTypes = await ticketsRepository.findAllTicketTypes();
  return ticketsTypes;
}

export { findTicketsTypes };
