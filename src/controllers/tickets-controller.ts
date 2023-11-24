import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import ticketServices from '@/services/tickets-service';

export async function findUserTickets(_req: AuthenticatedRequest, res: Response) {
  return res.status(200).send('ok');
}

export async function findAllTicketTypes(_req: AuthenticatedRequest, res: Response) {
  try {
    const ticket = await ticketServices.findTicketsTypes();
    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}

export async function createUserTicket(req: AuthenticatedRequest, res: Response) {
  return res.status(200).send('ok');
}
