import { TicketStatus } from '@prisma/client';
import { notFoundError } from '@/errors';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketsRepository, { CreateTicketParams } from '@/repositories/tickets-repository';

async function findTicketsTypes() {
  const ticketsTypes = await ticketsRepository.findAllTicketTypes();
  if (!ticketsTypes) throw notFoundError();
  return ticketsTypes;
}

async function findTicketsUser(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();
  const tickets = await ticketsRepository.findUserTicketsByEnrollmentId(enrollment.id);
  if (!tickets) throw notFoundError();
  return tickets;
}

async function createUserTicket(ticketTypeId: number, userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();
  const ticketData: CreateTicketParams = {
    ticketTypeId,
    enrollmentId: enrollment.id,
    status: TicketStatus.RESERVED,
  };
  await ticketsRepository.createTicket(ticketData);

  const ticket = await ticketsRepository.findUserTicketsByEnrollmentId(enrollment.id);

  return ticket;
}

const ticketServices = { findTicketsTypes, findTicketsUser, createUserTicket };
export default ticketServices;
