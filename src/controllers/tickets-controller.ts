import { Request, Response } from 'express';

export async function createUserTicket(req: Request, res: Response) {
  return res.status(200).send('ok');
}

export async function findUserTickets(_req: Request, res: Response) {
  return res.status(200).send('ok');
}

export async function findAllTicketTypes(_req: Request, res: Response) {
  return res.status(200).send('ok');
}
