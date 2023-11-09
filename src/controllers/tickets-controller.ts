import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { findTicketsTypes } from '@/services';

export async function findUserTickets(_req: Request, res: Response) {
  return res.status(200).send('ok');
}

export async function findAllTicketTypes(_req: Request, res: Response) {
  try {
    const ticket = await findTicketsTypes();
    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}

export async function createUserTicket(req: Request, res: Response) {
  return res.status(200).send('ok');
}
