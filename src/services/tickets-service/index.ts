import ticketsRepository from '@/repositories/tickets-repository';

async function findTicketsTypes() {
  const ticketsTypes = await ticketsRepository.findAllTicketTypes();
  console.log(ticketsTypes);
  return ticketsTypes;
}

const ticketServices = { findTicketsTypes };
export default ticketServices;
