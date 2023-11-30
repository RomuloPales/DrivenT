import { Ticket, TicketStatus } from '@prisma/client';
import { prisma } from '@/config';

async function findAllTicketTypes() {
  return prisma.ticketType.findMany();
}
async function findTickeyById(ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
    include: {
      Enrollment: true,
    },
  });
}
async function findTickeWithTypeById(ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
    include: {
      TicketType: true,
    },
  });
}

async function findUserTicketsByEnrollmentId(enrollmentId: number) {
  return prisma.ticket.findFirst({
    where: {
      enrollmentId,
    },
    include: {
      TicketType: true,
    },
  });
}
async function createTicket(ticketData: CreateTicketParams) {
  return prisma.ticket.create({
    data: { ...ticketData },
  });
}

async function ticketProcessPayment(ticketId: number) {
  return prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      status: TicketStatus.PAID,
    },
  });
}

const ticketsRepository = {
  findAllTicketTypes,
  findUserTicketsByEnrollmentId,
  createTicket,
  findTickeyById,
  findTickeWithTypeById,
  ticketProcessPayment,
};

export type CreateTicketParams = Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>;

export default ticketsRepository;
