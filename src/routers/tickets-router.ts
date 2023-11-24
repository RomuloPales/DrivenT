import { Router } from 'express';
import { createUserTicket, findAllTicketTypes, findUserTickets } from '@/controllers/tickets-controller';
import { authenticateToken } from '@/middlewares';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', findAllTicketTypes)
  .post('/', createUserTicket)
  .get('/', findUserTickets);

export { ticketsRouter };
