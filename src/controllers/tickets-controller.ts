import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import ticketServices from '@/services/tickets-service';

export async function findUserTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const tickets = await ticketServices.findTicketsUser(userId);
    return res.status(httpStatus.OK).send(tickets);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}

export async function findAllTicketTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const ticket = await ticketServices.findTicketsTypes();
    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}

export async function createUserTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { ticketTypeId } = req.body as { ticketTypeId: number };
  if (!ticketTypeId) {
    return res.status(httpStatus.BAD_REQUEST).send({});
  }
  try {
    const ticket = await ticketServices.createUserTicket(ticketTypeId, userId);
    return res.status(httpStatus.CREATED).send(ticket);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}
